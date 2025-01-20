import React from 'react'
import App from '../App';
import '../app.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const signup = () => {
    const [user,setUser] = useState({
        email:'',
        username:'',
        password:''
      })
   
      const navigate = useNavigate();
      const handleregister = async ()=>{
          try {
            const response = await axios.post('http://localhost:5600/api/user/register',{email:user.email,username:user.username,password:user.password});
            console.log(response);
            setUser({
              email: '',
              username: '',
              password: ''
            });
            alert('Registration successful.');
            navigate('/');
          } catch (error) {
            console.log(error,"iudfghjkl;'");
          }
      }
    
      return (
        <><form>
        
          <div className="container">
          <h1>Sign Up</h1>
               <label>Enter Username</label><br/>
               <input type='text' required placeholder='username' value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/><br/>
            
              <label>Enter your e-mail</label><br/>
              <input type='text' required placeholder='email' value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/><br/>
              <label>Enter your password</label><br/>
    
               <input type='password' required placeholder='password' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/><br/>
    <br/>
              <button onClick={handleregister}> sign up </button>
              
          </div>
          </form>
        </>
      )
    }
    

export default signup
