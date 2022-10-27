import React from 'react';
import { Link } from 'react-router-dom';

const AllCoursesCard = ({course}) => {
    const {title,intro, image_url} = course;
    return (

<div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className='h-[216px] w-full' src={image_url}  /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{intro}</p>
    <div className="card-actions justify-end">
      <Link to={`/course/${course.id}`}><button className="bg-[#00FF7B] hover:bg-[#6440FB] hover:text-white px-6 py-2 rounded text-black text-xl">Show Details</button></Link>
    </div>
  </div>
</div>
       
    );
};

export default AllCoursesCard;