import React from 'react';
import { Link } from 'react-router-dom';


const CoursesSideBar = ({course}) => {
  const {name}= course;
 
    return (
        
        <div>
        <ul>
          <li>
          <Link to={`/course/${course.id}`}>{name}</Link>
          </li>
        </ul>

        </div>
    );
};

export default CoursesSideBar;