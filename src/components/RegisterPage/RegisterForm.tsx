import React, { ChangeEvent, useState } from 'react'
import '../../App.css'

interface inputValueTypes{
  firstName:string
  lastName:string,
  email:string,
  password:string,
  confirmPassword:string
}

interface passwordValidator{
  symbol:boolean,
  number:boolean,
  upperCaseLetter:boolean,
  lowerCaseLetter:boolean,
  passwordLength:boolean
}

function RegisterForm(): JSX.Element{

  const [inputValue, setinputValue] = useState<inputValueTypes>({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
  });
  // show password 
  const [showPassword, setshowPassword] = useState<boolean>(false);

  // password checking
  const [passwordValidation, setpasswordValidation] = useState<passwordValidator>({
    symbol:false,
    number:false,
    upperCaseLetter:false,
    lowerCaseLetter:false,
    passwordLength:false
  })


  // setting the input values
  function handleChange(e:ChangeEvent<HTMLInputElement>):void{

    if((e.target.name=="firstName" || e.target.name=="lastName")&& (/[0-9]/).test(e.target.value)){
      alert('Oops! It\'s\ looks like you are trying to enter number.')
      return;
    }else if(e.target.name=="password"){

      let assign_obj: passwordValidator={
        symbol:false,
        number:false,
        upperCaseLetter:false,
        lowerCaseLetter:false,
        passwordLength:false
      };

      // symbol checking
      if((/[~,`,! ,@,#,$,%,^,&,*,(,),_,-,+,=,{,[,},],|,\,:,;,",',<,,,>,.,?,\/\]/).test(e.target.value)){
        assign_obj['symbol']=true;
      }else {
        assign_obj['symbol']=false;
      };

      // number checking
      if((/[0-9]/).test(e.target.value)){
        assign_obj['number']=true;
      }else{
        assign_obj['number']=false;
      }

      // uppercase letter checking
      if((/[A-Z]/).test(e.target.value)){
        assign_obj['upperCaseLetter']=true;
      }else{
        assign_obj['upperCaseLetter']=false;
      }

      // lowercase letter checking
      if((/[a-z]/).test(e.target.value)){
        assign_obj['lowerCaseLetter']=true;
      }else {
        assign_obj['lowerCaseLetter']=false;
      }

      // password length checking
      if(e.target.value.length>6){
        assign_obj['passwordLength']=true;
      }else{
        assign_obj['passwordLength']=false;
      }


      //replacing the values with assign_obj
      setpasswordValidation(assign_obj);

    }

    setinputValue({...inputValue,[e.target.name]:e.target.value})
  }


  return (
    <div>
        <form className='flex flex-col m-auto w-96'>
            <input type='text' onChange={handleChange} className='p-2 m-1 focus:outline-purple-500 border-2' name='firstName' value={inputValue.firstName} placeholder='First Name'/>
            <input type='text' onChange={handleChange}  value={inputValue.lastName} className='p-2 m-1 border-2 focus:outline-purple-500' name='lastName' placeholder='Last Name'/>
            <input type='email' onChange={handleChange} value={inputValue.email} className='p-2 m-1 border-2 focus:outline-purple-500' name='email' placeholder='Email'/>
            <input type='password' onChange={handleChange} value={inputValue.password} className='p-2 m-1 border-2 focus:outline-purple-500' name='password' placeholder='Password'/>
            <input type='password' onChange={handleChange} value={inputValue.confirmPassword} className='p-2 m-1 border-2 focus:outline-purple-500' name='confirmPassword' placeholder='Confirm Password'/>
            <button type='submit' className='p-2 m-1 bg-green-600 text-white hover:bg-green-500'>Register</button> 
        </form>
        <div>
          <ul>
            <li className={passwordValidation.symbol ? 'text-green-600' : 'text-gray-300' }>Symbol is added.</li>
            <li className={passwordValidation.number ? 'text-green-600' : 'text-gray-300' }>Number is added.</li>
            <li className={passwordValidation.upperCaseLetter ? 'text-green-600' : 'text-gray-300' }>Uppcase letter is added.</li>
            <li className={passwordValidation.lowerCaseLetter ? 'text-green-600' : 'text-gray-300' }>Lowercase letter is added.</li>
            <li className={passwordValidation.passwordLength ? 'text-green-600' : 'text-gray-300' }>Password length is gretar than 6.</li>
          </ul>
        </div>
    </div>
  )
}

export default RegisterForm