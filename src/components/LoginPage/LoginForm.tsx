import React, { ChangeEvent, useState } from 'react'
import '../../App.css'

interface inputValueTypes{
  email:string,
  password:string
}

function LoginForm(): JSX.Element{

  const [inputValue, setinputValue] = useState<inputValueTypes>({
    email:'',
    password:''
  });
  // show password 
  const [showPassword, setshowPassword] = useState<boolean>(false);



  // setting the input values
  function handleChange(e:ChangeEvent<HTMLInputElement>):void{

    setinputValue({...inputValue,[e.target.name]:e.target.value})
  }


  return (
    <div className='m-auto w-96 p-6'>
      <h1 className='text-center'>Login to your account!</h1>
        <form className='flex flex-col'>
            <input type='email' onChange={handleChange} value={inputValue.email} className='p-2 m-1 border-2 focus:outline-purple-500' name='email' placeholder='Email' required/>
            <input type='password' onChange={handleChange} value={inputValue.password} className='p-2 m-1 border-2 focus:outline-purple-500' name='password' placeholder='Password' required/>
            <button type='submit' className='p-2 m-1 bg-green-600 text-white hover:bg-green-500'>Register</button> 
        </form>
    </div>
  )
}

export default LoginForm