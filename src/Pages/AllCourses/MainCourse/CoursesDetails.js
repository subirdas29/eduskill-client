import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import ReactToPdf from 'react-to-pdf'

const CoursesDetails = () => {
    const coursesDetails = useLoaderData()
    const {title,image_url,details,name} =coursesDetails;

    const ref = React.createRef();
    return (
        
      // <FaDownload className='text-3xl text-center'></FaDownload>
            
            <div className='flex flex-col'>
    <ReactToPdf targetRef={ref} filename={`${name}.pdf`}>
        {({toPdf}) => (
            <button className='className="btn btn-outline btn-accent mx-96' onClick={toPdf}>pdf download</button>
        )}
    </ReactToPdf>
    

            <div ref={ref}>
            <div className='flex justify-center items-center'>
            <h1 className='text-4xl font-bold text-center my-10 underline mx-4'>{title}</h1>

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
         </div>
    );
};

export default CoursesDetails;