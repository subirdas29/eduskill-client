import React from 'react';
import { Link } from 'react-router-dom';


const CoursesSideBar = ({course}) => {
  const {name}= course;
 
    return (
        
        <div>


<ol className="menu bg-base-200 w-56 rounded-box border-2 my-4 shadow-lg">
  <li>
  <Link to={`/course/${course.id}`}>

<input className="mr-3 "type="radio" name='name' value={`${name}`} checked />
{name}

</Link>
  </li>
</ol>

       

        </div>
    );
};

export default CoursesSideBar;