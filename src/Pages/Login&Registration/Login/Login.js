import React, { useContext } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    
    const {Login,googleSignUp,gitHubSignUp} = useContext(AuthContext)
    const provider = new GoogleAuthProvider();
    const gitProvider= new GithubAuthProvider();

    const [error,setError] = useState('');

   const handleSubmit=(event)=>
   {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    Login(email,password)
    .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        <Navigate to="/" />
      })
      .catch((error) => {
      console.error('error',error)
      setError(error.message);
        
      });
}
   const googleHandleSubmit =()=>
   {
    googleSignUp(provider)
    .then((result) => {
       
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user)
    
       
      }).catch((error) => {
        
        console.error(error)
        
      });
    }

    const gitHandleSubmit =()=>
    {
        gitHubSignUp(gitProvider)
        .then((result) => {
           
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            
          }).catch((error) => {
           console.error(error)
          });
        
    }

    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl mt-8 font-bold">Login now!</h1>
                    <p className="py-4"></p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div>
                                <p className='text-red-400'>{error}</p>
                            </div>
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    <button className="btn btn-outline btn-success mx-8" onClick={googleHandleSubmit}>
                        <FaGoogle  className='mr-3 text-xl'></FaGoogle> <p>Google</p> </button>
                    <button className="btn btn-outline btn-success mx-8 my-3 " onClick={gitHandleSubmit}>
                        <FaGithub className='mr-3 text-xl'></FaGithub> Github</button>
                    
                </div>
            </div>
        </div>

    );
};

export default Login;