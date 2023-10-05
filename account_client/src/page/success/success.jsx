
export default function Success(){
  // useEffect(() => {
  //   console.log(token)
  //   if(!token){
  //     navigate('/login');
  //   }
  // }, [token, navigate])

  return (
    <div className="container">
      <div className="h-50"></div>
      <div className="alert alert-success" role="alert">
        <h1>:) Successfully!</h1>
        <p><a href="/account">Click to jump</a></p>
    </div>
    </div>
  )
}
