import React,{useState} from 'react'

const SigninForm = () => {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
  return (
    <div>
        <form action="">
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
                if(email && password){
                    setEmail('');
                    setPassword('');
                    let response = await fetch('http://localhost:8080/signin',{method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});
                    let user = await response.json();
                    
                    if(response.status === 201){
                        localStorage.setItem('jwt',user.token);
                        localStorage.setItem('email',user.email);
                        localStorage.setItem('firstName',user.firstName);
                        console.log('signed in',user.firstName)
                    }
                    else{
                        console.log(user.error);
                    }
                }
                else{
                    console.log("All fields are mandetory")
                }


            }}>Sign In</button>
        </form>
    </div>
  )
}

export default SigninForm