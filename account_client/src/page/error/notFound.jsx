
export default function NotFound(){

  return (
    <>
      <div className="container">
        <div className="h-50"></div>
        <div className="alert alert-danger" role="alert">
          <h1>:( incorrect path... Please enter correct path</h1>
          <p><a href="/login">Click to login</a></p>
        </div>
      </div>
    </>
  )
}