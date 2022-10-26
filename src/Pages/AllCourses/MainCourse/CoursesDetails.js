import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";

const CoursesDetails = () => {
    const coursesDetails = useLoaderData()
    const {title,image_url,details} =coursesDetails;
    return (
        
          <div>
            

            <div className='flex justify-center items-center '>
            <h1 className='text-4xl font-bold text-center my-10 underline mx-4'>{title}</h1>
            <FaDownload className='text-3xl'></FaDownload>
            </div>
              <div className="card w-96 bg-base-100 shadow-xl mx-auto">
  <figure><img src={image_url}/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
    <div className="card-actions justify-between">
    
     <Link to='/checkout'> <button className="btn btn-primary" >Get Premium Access</button></Link>
    </div>
  </div>
</div>
          </div>
       
    );
};

export default CoursesDetails;