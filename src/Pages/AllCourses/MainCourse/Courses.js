import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSideBar from '../CoursesSideBar/CoursesSideBar';
import AllCoursesCard from '../MainCourse/AllCoursesCard';


const Courses = () => {
    const courses = useLoaderData();

    console.log(courses)

    return (

        <div className='flex p-20'>

            <div className='w-1/4 pe-4 m-6'>
            <h1 className='text-3xl font-bold'>All Topics</h1>
            
                   {
                      courses.map(course => <CoursesSideBar
                        key={course.id}
                        course={course}>

                    </CoursesSideBar>)
                   }
                
               
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