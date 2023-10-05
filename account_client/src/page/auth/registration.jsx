import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Registration(){
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleUserChange = (e) => {
    const val = e.target.value;
    const option = e.target.name;
    switch(option){
      case "username": 
        setUser({...user, username: val});
        break;
      case "password": 
        setUser({...user, password: val});
    }
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/reg', user);
  }

  const handleGoLoginClick = (e) => {
    e.preventDefault();
    navigate('/login');
  }
  
  return (
    <div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-4 col-lg-offset-4">
        <h2>注册</h2>
        <hr />
        <form method="post" action="/reg">
          <div className="form-group">
            <label htmlFor="item">用户名</label>
            <input name="username" type="text" className="form-control" id="item" onChange={handleUserChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="time">密码</label>
            <input name="password" type="password" className="form-control" id="time" onChange={handleUserChange}/>
          </div>
          <hr />
          <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmitClick}>注册</button>
          <button type="submit" className="btn btn-primary btn-block" onClick={handleGoLoginClick}>登陆</button>
        </form>
      </div>
    </div>
  </div>
  )
}