import React from 'react';
import { Link } from 'react-router-dom';


const CoursesSideBar = ({course}) => {
  const {name}= course;
 
    return (
        
        <div>


<ol className="menu bg-base-200 w-56 rounded-box my-4">
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