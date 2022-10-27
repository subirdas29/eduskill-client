import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import ReactToPdf from 'react-to-pdf'

const CoursesDetails = () => {
    const coursesDetails = useLoaderData()
    const {title,image_url,details,name} =coursesDetails;

    const ref = React.createRef();
    return (
            
            <div className='flex flex-col'>
              
    <div className='flex mx-auto '>
    <div className='flex justify-center '>
            <h1 className='text-4xl font-bold text-center my-10 underline mx-8'>{title}</h1>

            </div>
    <div>
    <ReactToPdf targetRef={ref} filename={`${name}.pdf`}>
        {({toPdf}) => (
            <button className='flex border px-4 py-2  rounded bg-[#00FF7B] text-black mx-auto mt-10' onClick={toPdf}><span className='mr-3'>pdf download</span><FaDownload  className='text-2xl '></FaDownload></button>
        )}
        
    </ReactToPdf>
    </div>
    
    </div>
    

            <div ref={ref}>
            
              <div className="card w-3/4 bg-base-100 shadow-xl mx-auto mb-10">
  <figure><img className='w-full' src={image_url}/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
    <div className="card-actions justify-between">
    
     <Link to='/checkout'> <button className="bg-[#00FF7B] hover:bg-[#6440FB] hover:text-white px-6 py-2 rounded text-black text-xl mt-6" >Get Premium Access</button></Link>
    </div>
  </div>
</div>
          </div>
         </div>
    );
};

export default CoursesDetails;