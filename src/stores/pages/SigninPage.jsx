import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link,useNavigate } from 'react-router-dom'

const SigninPage = () => {
     
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError]=useState('')
  const navigate=useNavigate()

  const submitHandler=async(e)=>{
    e.preventDefault();
  
    if (!email || !password){
    setError('Please enter credentials')
    return;
    }
    if(email==='admin@gmail.com' && password==='admin123')
      {
        setError('')
        navigate('/admin')
      }
    else{
      setError('invalid credentials')
    }
  }
 
  return (
    <>
    <Navbar/>

    <div className="form-heading">
      <h2>Sign In </h2>
    </div>
    {error && <div style={{ color: 'red', marginBottom: '10px', textAlign: 'center'}}>{error}
    </div>}
    <form className='form-section' onSubmit={submitHandler}>
      <div>
      <label>Email</label>
      <input type="email" placeholder='Enter your Email' value={email}
      onChange={(e)=> setEmail(e.target.value)} /> <br/>
      </div>

      <div>
      <label>Password</label>
      <input type="password" placeholder='Enter your Password' value={password} 
      onChange={(e)=> setPassword(e.target.value)}/> <br/>
      </div>

      <div>
      <button className='btn' type="submit">Login</button>  
     <Link to='/' > <button className='btn'>Cancel</button>  </Link>
      </div>
      
      </form>
    </>
  )
}

export default SigninPage
