import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCoursesCard from './AllCoursesCard';
import CoursesSideBar from './CoursesSideBar/CoursesSideBar';

const Courses = () => {
    const courses = useLoaderData();

    console.log(courses)

    return (

        <div className='flex '>

            <div className='w-1/4 pe-4 m-6'>
            
                     <CoursesSideBar>              

                    </CoursesSideBar>
                
               
            </div>
            <div className=' w-3/4 grid grid-cols-2 gap-10 mx-8' >
               
                {
                    courses.map(course => <AllCoursesCard
                        key={course.id}
                        course={course}>

                    </AllCoursesCard>)
                }
               
            </div>



        </div>
    );
};

export default Courses;