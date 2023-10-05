import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createItem } from '../../utils/services';
import { useNavigate } from 'react-router-dom';

export default function Create(){
  const [newItem, setNewItem] = useState({});
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleNewItemChange = (e) => {
    const val = e.target.value;
    const target = e.target.name;
    switch(target){
      case "title":
        setNewItem({...newItem, title: val})
        break;
      case "time":
        setNewItem({...newItem, time: val})
        break;
      case "type":
        setNewItem({...newItem, type: val})
        break;
      case "account":
        setNewItem({...newItem, account: val})
        break;
      case "remarks":
        setNewItem({...newItem, remarks: val})
        break;
      default:
        return newItem
    }
  }

  const handleAddClick = async (e) => {
    e.preventDefault()
    // const res = await axios.post('http://localhost:3000/api/account', newItem, {withCredentials: true});
    // if(res.data.msg === "创建成功"){
    //   navigate('/success')
    // }
    // console.log(newItem)
    dispatch(createItem({url:'/account', newItem}));
    navigation('/success')
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-lg-8 col-lg-offset-2">
          <h2>添加记录</h2>
          <hr />
          <form method="post" action="/account">
            <div className="form-group">
              <label htmlFor="item">事项</label>
              <input
                name="title"
                type="text"
                className="form-control"
                id="item"
                onChange={handleNewItemChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">时间</label>
              <input
                name="time"
                type="date"
                className="form-control"
                id="time"
                onChange={handleNewItemChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">类型</label>
              <select name="type" className="form-control" id="type" onChange={handleNewItemChange}>
                <option value="-1">支出</option>
                <option value="1">收入</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="account">金额</label>
              <input
                name="account"
                type="text"
                className="form-control"
                id="account"
                onChange={handleNewItemChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="remarks">备注</label>
              <textarea name="remarks" className="form-control" id="remarks" onChange={handleNewItemChange}></textarea>
            </div>
            <hr />
            <button type="submit" className="btn btn-primary btn-block" onClick={handleAddClick}>添加</button>
          </form>
        </div>
      </div>
    </div>
  )
}