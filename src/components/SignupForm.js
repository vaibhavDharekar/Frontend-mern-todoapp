import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validateForm from '../utils/validateForm';

const SignupForm = () => {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [firstName,setFirstName] = useState('')
    let [lastName,setLastName] = useState('')
    let navigate = useNavigate();
    const notify = (msg) => toast(msg);
  return (
    <div className='flex h-screen w-screen'>
                
        <div className='flex w-96 p-6 shadow-lg m-auto  items-center border border-gray-300'>
        <div>
        <ToastContainer />
      </div>
        
        <form action="">
        <div className='mb-5 text-center text-2xl'>Sign Up</div>
            <div className='mb-3 border border-gray-100 shadow-sm p-1 w-80'>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id='firstName' placeholder='FirstName' value={firstName} required  onChange={(e)=>{
                setFirstName(e.target.value);
            }}/>
            </div>
            
            <div className='mb-3 border border-gray-100 shadow-sm p-1'>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id='lastName' placeholder='LastName' value={lastName} onChange={(e)=>{
                setLastName(e.target.value);
            }}/>
            </div>
            <div className='mb-3 border border-gray-100 shadow-sm p-1'>
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' placeholder='Email' value={email} onChange={(e)=>{
                setEmail(e.target.value);
            }}/>
            </div>
            <div className='mb-3 border border-gray-100 shadow-sm p-1'>
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' placeholder='Password' value={password} onChange={(e)=>{
                setPassword(e.target.value);
            }}/>
            </div>
            <button className='bg-orange-500 p-1 rounded-lg' onClick={async(e)=>{
                
                e.preventDefault();
                setIsSubmit(1);
                let response;
                let validated = validate();
                let msg = validateForm(email,password,firstName,lastName);
                if(!msg){
                    response = await fetch('http://localhost:8080/signup',{method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password,firstName,lastName})});
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
                    
                    notify(msg);

                }


            }}>Sign Up</button>
        </form>
    </div>
    </div>
  )
}

export default SignupForm