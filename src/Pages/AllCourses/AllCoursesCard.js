import React from 'react';

const AllCoursesCard = ({course}) => {
    const {title,intro, image_url} = course;
    return (

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{intro}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
       
    );
};

export default AllCoursesCard;