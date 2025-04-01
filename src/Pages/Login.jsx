import '../Styles/Login.css'
const Login =()=>{
       return(
              <div className="login-container">
                     <h3>Login</h3>
                     <form action="#">
                            <label htmlFor="username">Username :</label>
                            <input type="text" name="username" id="username" />
                            <label htmlFor="password">Password :</label>
                            <input type="password" name="password" id="password" />
                            <button type="submit">Submit</button>
                     </form>
              </div>
       )
}

export default Login