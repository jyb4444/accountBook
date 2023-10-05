const express = require('express');
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');
const UserModel = require('../../models/UserModel');
const checkLoginMiddleware = require('../../middlewares/checkLoginMiddleware');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/account');
})

//记账本的列表
router.get('/account', checkLoginMiddleware, async function(req, res, next) {
   //读取集合信息
  const {username, password} = req.session;
  const user = await UserModel.find({username: username, password: password});
  const userId = user[0]._id.toString();
  AccountModel.find({userId: userId}).sort({time: -1}).exec((err, data) => {
    if(err){
      res.status(500).send('读取失败~~~');
      return;
    }
    res.render('list', {accounts: data, moment: moment});
  })
});

//添加记录
router.get('/account/create',checkLoginMiddleware, function(req, res, next) {
  res.render('create');
});

//新增记录
router.post('/account',checkLoginMiddleware, async (req, res) => {
  //插入数据库
  const {username, password} = req.session;
  const user = await UserModel.find({username: username, password: password});
  const userId = user[0]._id.toString();
  AccountModel.create(
    {
      ...req.body,
      //修改 time 属性的值
      time: moment(req.body.time).toDate(),
      userId: userId
    },
    (err, data) => {
      if (err) {
        res.status(500).send("插入失败~~")
        return
      }
      res.render("success", { msg: "添加成功哦~~~", url: "/account" })
    }
  )
});

//删除记录
router.get('/account/:id', checkLoginMiddleware, (req, res) => {
  //获取 params 的 id 参数
  let id = req.params.id;
  //删除
  AccountModel.deleteOne({_id: id}, (err, data) => {
    if(err) {
      res.status(500).send('删除失败~');
      return;
    }
    res.render('success', {msg: '删除成功~~~', url: '/account'});
  })
});

module.exports = router;
