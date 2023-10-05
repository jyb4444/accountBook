import { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList, logout, deleteItem } from '../../utils/services';
import { useNavigate } from 'react-router-dom';

export default function List(){
  const dispatch = useDispatch();
  const { accounts } = useSelector((state) => state.info);
  const navigation = useNavigate();

  const fetchData = async () =>{
    dispatch(fetchList('/account'));
  }

  const handleLogoutClick = async () => {
    dispatch(logout('/logout'))
    navigation('/login')
  }

  const handleDeleteClick = async (id) => {
    dispatch(deleteItem(`/account/${id}`))
    navigation('/success')
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="container">
    <div className="row">
      <div className="col-xs-12 col-lg-8 col-lg-offset-2">
        <div className="row text-right">
          <div className="col-xs-12" style={{paddingTop: "20px"}}>
              <button className="btn btn-danger" onClick={handleLogoutClick}>退出</button>
          </div>
        </div>
        <hr />
        <div className="row">
          <h2 className="col-xs-6">记账本</h2>
          <h2 className="col-xs-6 text-right"><a href="/create" className="btn btn-primary">添加账单</a></h2>
        </div>
        <hr />
        <div className="accounts">
          {accounts.map((item) => {
            return <div key={item._id} className={(item.type=== -1 ? 'panel panel-danger' : ' panel panel-success')}>
              <div className="panel-heading">
                {moment(item.time).format('YYYY-MM-DD')}
              </div>
              <div className="panel-body">
                <div className="col-xs-6">
                  {item.title}
                </div>
                <div className="col-xs-2 text-center">
                  <span className={(item.type=== -1 ? 'label label-warning' : 'label label-success')}>
                    {item.type===-1 ? '支出' : '收入'}
                  </span>
                </div>
                <div className="col-xs-2 text-right">
                  {item.account} 元
                </div>
                <div className="col-xs-2 text-right">
                  <a className="delBtn" onClick={() => handleDeleteClick(item._id)}>
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                  </a>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  </div>
  )
}