import React, { Component, useState } from 'react'
import { useNavigate } from "react-router-dom";
 const Login=()=> {
  
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  const[show,setShow]=useState(false)
  const handelChange=(e)=>{
    e.preventDefault();
    fetch("http://localhost:5000/login",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
        Accept:"application/json",
      },
      body:JSON.stringify({username,password})
    }).then(res=>res.json())
    .then((data)=>{
      if(data.status==="ok"){
        window.location.href="http://localhost:5000/"
        setShow(false)
      }else{
        setShow(true)
      }
    })
    setUsername("")
    setPassword("")
    // window.location.href="http://localhost:5000/"
  }
  
    return (
      <form style={{width: "18rem",margin:"auto",marginTop:"7%",padding:"10px"}} onSubmit={handelChange} className="border">
        <i class="fa-solid fa-chevron-left"></i>
        <p>Login</p>
        <h1>Please enter your details</h1>
        
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type your username here"
           onChange={(e)=>setUsername(e.target.value)}

          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Type your password here"
           onChange={(e)=>setPassword(e.target.value)}

          />
        </div>

        {show && <div className="d-grid">
          <button type="submit" className="btn btn-danger opacity-50">
Enter correct details
          </button>
        </div> }

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        
      </form>
    )
  
}
export default Login;