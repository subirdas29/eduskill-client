import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { FaUser } from "react-icons/fa";



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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
            <li><Link to='/blog'>Blogs</Link></li>
            <li><Link to='/faq'>FAQ</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">EduSkill</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/courses'>Courses</Link></li>
          <li><Link to='/blog'>Blogs</Link></li>
          <li><Link to='/faq'>FAQ</Link></li>

        </ul>
      </div>
      <div className="navbar-end">


        
            {
              user?.uid ?
                <>
                  <button onClick={logOutBtn} className="btn mx-3">Logout</button>
                  <span>{user?.displayName}</span>
                </>
                :
                <>
                  <Link to="/login" className="btn">Login</Link>
                  <Link to="/register" className="btn mx-3">Register</Link>
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
              
                <FaUser></FaUser>
            }
          


        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text"></span>
            <input type="checkbox" className="toggle toggle-accent" checked />
          </label>
        </div>
      </div>
    </div>


  );
};

export default Header;