import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            username:"",
            email:"",
            password:"",
        
        }
        this.handelSubmit=this.handelSubmit.bind(this)
    }
    handelSubmit(e){
        e.preventDefault()
        const{name,username,email,password}=this.state;
        
        fetch("http://localhost:5000/register",{
          method:"POST",
          
          headers:{
            "Content-type":"application/json",
            Accept:"application/json",
           

          },
          body:JSON.stringify({name,username,email,password})
        }).then(res=>res.json())
        .then(data=>console.log(data))
        window.location.href="http://localhost:3000/login"
        this.state={
          name:"",
          username:"",
          email:"",
          password:""
      }
        
    }
  render() {
    return (
      <form style={{width: "18rem",margin:"auto",marginTop:"7%",padding:"10px"}} onSubmit={this.handelSubmit}  className="border">
        <i class="fa-solid fa-chevron-left"></i>
        <p>Create Account</p>
        <h1>Let's get to know you better!</h1>
        

        <div className="mb-3">
          <label>Your name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type your name here"
            onChange={e=>this.setState({name:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>User name</label>
          <input type="text" className="form-control" placeholder="Type your username here" 
           onChange={(e)=>this.setState({username:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Type your email here"
            onChange={(e)=>this.setState({email:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Type your password here"
            onChange={(e)=>this.setState({password:e.target.value})}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" >
            Register
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
    )
  }
}