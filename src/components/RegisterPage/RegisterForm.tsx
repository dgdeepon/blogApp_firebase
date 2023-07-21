import React, { ChangeEvent, useState } from 'react'
import '../../App.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import '../../global styling/globalStyle.css'

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
  passwordLength:boolean,
  passwordMatched:boolean
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
    passwordLength:false,
    passwordMatched:false
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
        passwordLength:false,
        passwordMatched:false
      };

      // symbol checking
      if((/[@$!%*#?&,/\\'"`<>?|]/).test(e.target.value)){
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

      // matching password
      if( inputValue.confirmPassword && e.target.value && e.target.value == inputValue.confirmPassword){
        assign_obj['passwordMatched']=true;
      }else {
        assign_obj['passwordMatched']=false;
      }


      //replacing the values with assign_obj
      setpasswordValidation(assign_obj);

    }else if(e.target.name == "confirmPassword"){
      if( e.target.value && inputValue.password && e.target.value == inputValue.password){
        setpasswordValidation({...passwordValidation,passwordMatched:true});
      }else {
        setpasswordValidation({...passwordValidation,passwordMatched:false});
      }
    }

    setinputValue({...inputValue,[e.target.name]:e.target.value});
  }

  // submitting user details 
   function handleSubmit(e:ChangeEvent<HTMLFormElement>):void{
    e.preventDefault();
    if(passwordValidation.lowerCaseLetter && passwordValidation.number && passwordValidation.passwordLength && passwordValidation.passwordMatched && passwordValidation.symbol && passwordValidation.upperCaseLetter){

      createUserWithEmailAndPassword(auth,inputValue.email,inputValue.password)
      .then((userDetails)=>{
        // console.log(userDetails);
        alert("Your account has been successfully created.")
      }).catch((error)=>{
        // console.log(error.message);
        alert("Something went wrong.")
      })
    }else {
      alert('Invaild user creditionals!');
      return;
    }
  }


  return (
    <div className='m-auto w-96 p-6'>
    <h1 className='text-center'>Register your account!</h1>
        <form className='flex flex-col m-auto w-96' onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} className='FormStyles' name='firstName' value={inputValue.firstName} placeholder='First Name'/>
            <input type='text' onChange={handleChange}  value={inputValue.lastName} className='FormStyles' name='lastName' placeholder='Last Name'/>
            <input type='email' onChange={handleChange} value={inputValue.email} className='FormStyles' name='email' placeholder='Email' required/>
            <input type='password' onChange={handleChange} value={inputValue.password} className='FormStyles' name='password' placeholder='Password' required/>
            <input type='password' onChange={handleChange} value={inputValue.confirmPassword} className='FormStyles' name='confirmPassword' placeholder='Confirm Password'/>
            <button type='submit' className='p-2 m-1 bg-green-600 text-white hover:bg-green-500'>Register</button> 
        </form>
        <div>
          <ul className='w-96 m-auto'>
            <li className={passwordValidation.symbol ? 'text-green-600' : 'text-gray-300' }>Symbol is added.</li>
            <li className={passwordValidation.number ? 'text-green-600' : 'text-gray-300' }>Number is added.</li>
            <li className={passwordValidation.upperCaseLetter ? 'text-green-600' : 'text-gray-300' }>Uppcase letter is added.</li>
            <li className={passwordValidation.lowerCaseLetter ? 'text-green-600' : 'text-gray-300' }>Lowercase letter is added.</li>
            <li className={passwordValidation.passwordLength ? 'text-green-600' : 'text-gray-300' }>Password length is gretar than 6.</li>
            <li className={passwordValidation.passwordMatched ? 'text-green-600' : 'text-gray-300' }>Password matched.</li>
          </ul>
        </div>
    </div>
  )
}

export default RegisterForm