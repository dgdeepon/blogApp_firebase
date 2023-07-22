import React, { ChangeEvent, useEffect, useState } from 'react'
import '../../App.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

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

  // loading bar
  const [LoadingBar, setLoadingBar] = useState<boolean>(false);

  // navigation
  const navigation=useNavigate();



  // setting the input values
  function handleChange(e:ChangeEvent<HTMLInputElement>):void{

    setinputValue({...inputValue,[e.target.name]:e.target.value})
  }

  // login function
  function handleSubmit(e:ChangeEvent<HTMLFormElement>) : void{
    e.preventDefault();
    if(inputValue.email && inputValue.password){
      setLoadingBar(true);
      signInWithEmailAndPassword(auth,inputValue.email,inputValue.password)
      .then((userDetails)=>{
        console.log(userDetails);
        console.log(userDetails.user.uid);
        setLoadingBar(false);
        navigation('/dashboard');
      }).catch((err)=>{
        // console.log(err);
        setLoadingBar(false);
      })
    }else{
      alert("Invaild user input.");
    }
  }

  useEffect(()=>{

  },[LoadingBar])


  return (

<div className="flex flex-wrap w-full">
    <div className="flex flex-col w-full md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
        </div>
        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p className="text-3xl text-center">
                Welcome.
            </p>
            <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
                <div className="flex flex-col pt-4">
                    <div className="flex relative ">
                        <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                </path>
                            </svg>
                        </span>
                        <input type="text" id="design-login-email" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name='email' value={inputValue.email} onChange={handleChange} placeholder="Email" required/>
                        </div>
                    </div>
                    <div className="flex flex-col pt-4 mb-12">
                        <div className="flex relative ">
                            <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                    </path>
                                </svg>
                            </span>
                            <input type="password" id="design-login-password" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={inputValue.password} name='password' onChange={handleChange} placeholder="Password" required/>
                            </div>
                        </div>
                        <button type='submit' className='flex justify-center m-1 w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2'>{LoadingBar ? 
            <div role="status" className='mx-auto'>
            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
</div>
: "Login"}</button> 
                    </form>
                    <div className="pt-12 pb-12 text-center">
                        <p>
                            Don&#x27;t have an account?
                            <a href="/register" className="font-semibold underline">
                                Register here.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 shadow-2xl">
                <img className="hidden object-cover w-full h-screen md:block" src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80"/>
            </div>
        </div>

  )
}

export default LoginForm