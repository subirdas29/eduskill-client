import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { FaUser } from "react-icons/fa";
import DarKAndLightMode from '../DarkAndLightMode/DarKAndLightMode';




const Header = () => {
  const { user, logOut } = useContext(AuthContext)

  const logOutBtn = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }
  return (
    <div className="navbar bg-[#140342] border-b-2 p-4 border-[#007C86]">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-[#140342] rounded-box w-52">
            <li className='text-white hover:text-[#00FF84]'><Link to='/'>Home</Link></li>
            <li className='text-white hover:text-[#00FF84]'><Link to='/courses'>Courses</Link></li>
            <li className='text-white hover:text-[#00FF84]'><Link to='/blog'>Blogs</Link></li>
            <li className='text-white hover:text-[#00FF84]'><Link to='/faq'>FAQ</Link></li>
          </ul>
        </div>
        
          <div className='flex ml-4'>
          <img className='w-30 h-10' src="https://i.ibb.co/PZBYZdC/png-clipart-computer-icons-professional-certification-business-course-certificates-blue-people-remov.png" alt="" />
       
        
       <Link to='/' className=" text-3xl text-[#00FF84] ">EduSkill</Link>
          </div>
        
       
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className='text-white hover:text-[#00FF84]'><Link to='/'>Home</Link></li>
          <li className='text-white hover:text-[#00FF84]'><Link to='/courses'>Courses</Link></li>
          <li className='text-white hover:text-[#00FF84]'><Link to='/blog'>Blogs</Link></li>
          <li className='text-white hover:text-[#00FF84]'><Link to='/faq'>FAQ</Link></li>

        </ul>
      </div>
      <div className="navbar-end">


        
            {
              user?.uid ?
                <>
                  <button onClick={logOutBtn} className="btn  btn-outline btn-success hover:bg-[#6440FB] mx-3">Logout</button>
                  <span className='text-white'>{user?.displayName}</span>
                </>
                :
                <>
                  <Link to="/login" className="px-4 py-2 font-semibold rounded bg-[#00FF84]  hover:bg-[#6440FB] hover:text-white">Login</Link>
                  <Link to="/register" className="px-4 py-2 rounded bg-[#00FF84] font-semibold hover:bg-[#6440FB] hover:text-white mx-4">Register</Link>
                </>
            }
          
          
            {
              user?.photoURL ?
                <>
                  <div className="avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                    <div className="mx-4 w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </>
                :
              
                <FaUser className='text-white'></FaUser>
            }
          
            <DarKAndLightMode></DarKAndLightMode>

        
      </div>
    </div>


  );
};

export default Header;