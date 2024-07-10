import React, { useState } from 'react'
import style from './login.module.css'

const Login = () => {
  const [action,setaction] = useState("login");

  return (

    
    <>
       <div className={style.B}> 
        <h2 class="acc">{action}</h2>    

        {action === "Login"?<div> </div>:<div><input className={style.input} type="text" placeholder="Name"/><br/> </div> }
      
        {/* <input className={style.input} type="text" placeholder="Name"/> <br /> */}
        <br />
        
        <input className={style.input} type="text" placeholder="Email"/> <br /> 
        <br />
        <input className={style.input} type="text" placeholder="Password"/> <br />
        <br />
       <button className={action === "Login"? "submit gray":"submit"} onClick={()=>{setaction("Sign Up")}}>SIGN UP</button>
       <button className={action === "Sign Up"? "submit gray":"submit"} onClick={()=>{setaction('Login')}}>LOG in</button>

    </div>

    
    </>

  )
}

export default Login
