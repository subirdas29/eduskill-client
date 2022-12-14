import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {

    const {signUp,googleSignUp,gitHubSignUp,userProfile} = useContext(AuthContext)
    const provider = new GoogleAuthProvider();
    const gitProvider= new GithubAuthProvider();
    const [error,setError] = useState('');
    const navigator = useNavigate();
   const handleSubmit=(event)=>
   {
    event.preventDefault();;
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    signUp(email,password)
    .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigator('/login')
        setError('')
        updateUserProfile(name,photoURL)
      })
      .catch((error) => {
      console.error('error',error)
      setError(error.message)
        
      });
   }

   const googleHandleSubmit =()=>
   {
    googleSignUp(provider)
    .then((result) => {
       
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
    
       
      }).catch((error) => {
        
        console.error(error)
        
      });
   }

   const updateUserProfile =(name,photoURL)=>
   {
    const profile={
      displayName:name,
      photoURL:photoURL
    }
    userProfile(profile)
    .then(() => {})
    .catch((error) => {
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
            <h1 className="text-5xl font-bold">Registration now!</h1>
            <p className="py-2"></p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" placeholder="Enter Your Name" name='name' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" name='photoURL' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                <label className="label">
                <p>Already have an account? <Link className='text-[#6440FB]' to='/login'> Log in</Link> </p> 
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="bg-[#00FF7B] hover:bg-[#6440FB] hover:text-white py-3 rounded text-black text-xl font-semibold">Register</button>
              </div>
            </form>

            <button onClick={googleHandleSubmit} className="btn  btn-outline hover:bg-[#6440FB] mx-8">
                        <FaGoogle  className='mr-3 text-xl'></FaGoogle> <p>Google</p> </button>
                    <button className="btn btn-outline hover:bg-[#6440FB] mx-8 my-3" onClick={gitHandleSubmit}>
                        <FaGithub className='mr-3 text-xl'></FaGithub> Github</button>

          </div>
        </div>
      </div>
    );
};

export default Registration;