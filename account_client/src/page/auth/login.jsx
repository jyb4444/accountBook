import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../reducer/infoSlice';
import { useDispatch } from 'react-redux';

export default function Login(){
  const [user, setUser] = useState({});
  const navigation = useNavigate();
  const dispatch = useDispatch();

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

  const handleLoginClick = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/api/login', user, {withCredentials: true});
    if(res.data.msg === "登录成功"){
      dispatch(setToken(res.data.data))
      localStorage.setItem('token', res.data.data)
      navigation('/account')
    }else{
      navigation('/error')
    }
  }

  const handleGoRegClick = (e) => {
    e.preventDefault();
    navigation('/reg');
  }

  return (
    <div className="container">
    <div className="row">
      <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-4 col-lg-offset-4">
        <h2>登录</h2>
        <hr />
        <form method="post" action="/login">
          <div className="form-group">
            <label htmlFor="item">用户名</label>
            <input name="username" type="text" className="form-control" id="item" onChange={handleUserChange} />
          </div>
          <div className="form-group">
            <label htmlFor="time">密码</label>
            <input name="password" type="password" className="form-control" id="time" onChange={handleUserChange} />
          </div>
          <hr />
          <button type="submit" className="btn btn-primary btn-block" onClick={handleLoginClick}>登录</button>
          <button type="submit" className="btn btn-primary btn-block" onClick={handleGoRegClick}>注册</button>
        </form>
      </div>
    </div>
  </div>
  )
}