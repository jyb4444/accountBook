import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Error(){
  const { token } = useSelector((state) => state.info);
  const navigate = useNavigate();

  useEffect(() => {
    if(!token){
      navigate('/login');
    }
  }, [token])

  return (
    <div className="container">
      <div className="h-50"></div>
      <div className="alert alert-danger" role="alert">
        <h1>:( Failed....</h1>
        <p><a href="/login">Click to jump</a></p>
    </div>
    </div>
  )
}