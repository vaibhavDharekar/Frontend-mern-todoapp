import React,{useState} from 'react'
import {useNavigate,Link } from 'react-router-dom';
import { BackendURL } from '../utils/backendURL';

const SigninForm = () => {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const validateForm = (email,password) => {
        let formErrors_ = {};
        if (!email.trim()) {
          formErrors_.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formErrors_.email = 'Invalid email address format';
        }
        if (!password.trim()) {
            formErrors_.password = 'Password is required';
        }
        return formErrors_;
      };
  return (
    <div className='h-screen flex justify-center items-center bg-slate-300'>
        <div className='bg-white p-8 rounded-sm shadow-md w-96'>
            <div className='text-2xl mb-4'>Sign In</div>
        <form action="">
            <div className='mb-2'>
            <label htmlFor="email" className='block'>Email:</label>
            <input type="email" id='email' className='border w-full p-2 outline-none'  value={email} onChange={(e)=>{
                setEmail(e.target.value);
            }}/>
            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
            </div>
            <div className='mb-2'>
            <label htmlFor="password" className='block'>Password:</label>
            <input type="password" id='password' className='border w-full p-2 outline-none'  value={password} onChange={(e)=>{
                setPassword(e.target.value);
            }}/>
            {formErrors.password && <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>}
            </div>
            <button className='p-1 bg-orange-500 hover:bg-orange-600 rounded-md ' onClick={async(e)=>{
                e.preventDefault();
                
                setFormErrors(validateForm(email,password));
                if(!Object.keys(formErrors).length){
                    setEmail('');
                    setPassword('');
                    let response = await fetch(`${BackendURL}/signin`,{method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});
                    let user = await response.json();                    
                    if(response.status === 201){
                        localStorage.setItem('jwt',user.token);
                        localStorage.setItem('email',user.email);
                        localStorage.setItem('firstName',user.firstName);
                        navigate('/todoapp');
                    }
                    else{
                        if(user.errorCode == 1)
                        {
                            navigate('/signup')
                        }
                        else if(user.errorCode == 2)
                        {
                            navigate('/singin')
                        }

                    }
                }
            }}>Sign In</button>
            <div className='text-sm '>Don't you have an account?<Link to={'/signup'} className='text-blue-400 underline'>Sign Up</Link></div>
        </form>
        </div>
    </div>
  )
}

export default SigninForm