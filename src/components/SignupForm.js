import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import validateForm from '../utils/validateForm';
import { BackendURL } from '../utils/backendURL';

const SignupForm = () => {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [firstName,setFirstName] = useState('')
    let [lastName,setLastName] = useState('')
    let navigate = useNavigate();
    let [formErrors,setFormErrors] = useState({});
  return (
    <div className='flex h-screen justify-center items-center bg-slate-300'>
                
        <div className='w-96 p-8 rounded-sm shadow-lg bg-white'>
        
        <form action="">
        <div className='text-2xl mb-4'>Sign Up</div>
            <div className='mb-2'>
            <label htmlFor="firstName" className='block'>First Name:</label>
            <input type="text" className='border w-full p-2 outline-none' id='firstName'  value={firstName} required  onChange={(e)=>{
                setFirstName(e.target.value);
            }}/>
            {formErrors.firstNameError && <p className="text-red-500 text-xs mt-1">{formErrors.firstNameError}</p>}
            </div>
            
            <div className='mb-3'>
            <label htmlFor="lastName" className='block'>Last Name:</label>
            <input type="text" className='border w-full p-2 outline-none' id='lastName'  value={lastName} onChange={(e)=>{
                setLastName(e.target.value);
            }}/>
            {formErrors.lastNameError && <p className="text-red-500 text-xs mt-1">{formErrors.lastNameError}</p>}
            </div>
            <div className='mb-3 '>
            <label htmlFor="email" className='block'>Email:</label>
            <input type="email" className='border w-full p-2 outline-none' id='email'  value={email} onChange={(e)=>{
                setEmail(e.target.value);
            }}/>
            {formErrors.emailError && <p className="text-red-500 text-xs mt-1">{formErrors.emailError}</p>}
            </div>
            <div className='mb-3'>
            <label htmlFor="password" className='block'>Password:</label>
            <input type="password" className='border w-full p-2 outline-none' id='password'  value={password} onChange={(e)=>{
                setPassword(e.target.value);
            }}/>
            {formErrors.passwordError && <p className="text-red-500 text-xs mt-1">{formErrors.passwordError}</p>}
            </div>
            <button className='bg-orange-500 hover:bg-orange-600 p-1 rounded-lg' onClick={async(e)=>{
                
                e.preventDefault();
                let response;
                let formErrors_ = validateForm(email,password,firstName,lastName);
                setFormErrors(formErrors_);
                if(!Object.keys(formErrors).length){
                    response = await fetch(`${BackendURL}/signup`,{method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password,firstName,lastName})});
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

            }}>Sign Up</button>
            <div className='text-sm'>Do you have an account?<Link to={'/signin'} className='text-blue-400 underline'>Sign In</Link></div>
        </form>
    </div>
    </div>
  )
}

export default SignupForm