import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SignupForm = () => {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [firstName,setFirstName] = useState('')
    let [lastName,setLastName] = useState('')
    let navigate = useNavigate(); 
  return (
    <div>
        <form action="">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id='firstName' placeholder='FirstName' value={firstName} onChange={(e)=>{
                setFirstName(e.target.value);
            }}/>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id='lastName' placeholder='LastName' value={lastName} onChange={(e)=>{
                setLastName(e.target.value);
            }}/>
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' placeholder='Email' value={email} onChange={(e)=>{
                setEmail(e.target.value);
            }}/>
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' placeholder='Password' value={password} onChange={(e)=>{
                setPassword(e.target.value);
            }}/>
            <button onClick={async(e)=>{
                e.preventDefault();
                if(email && password && firstName && lastName){
                    let response = await fetch('http://localhost:8080/signup',{method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password,firstName,lastName})});
                    let data = await response.json();
                    setEmail('');
                    setPassword('');
                    setFirstName('');
                    setLastName('');
                    
                    if(response.status === 201){
                        
                        navigate('/signin');
                    }
                    else{
                        navigate('/signup')
                    }
                }
                else{
                    console.log("All fields are mandetory")
                }


            }}>Sign Up</button>
        </form>
    </div>
  )
}

export default SignupForm