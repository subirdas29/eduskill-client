import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Error404 from "../../Pages/404Error/Error404";
import CheckOut from "../../Pages/AllCourses/CheckOut/CheckOut";
import CoursesSideBar from "../../Pages/AllCourses/CoursesSideBar/CoursesSideBar";
import Courses from "../../Pages/AllCourses/MainCourse/Courses";
import CoursesDetails from "../../Pages/AllCourses/MainCourse/CoursesDetails";
import Blogs from "../../Pages/Blogs/Blogs";

import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login&Registration/Login/Login";
import Registration from "../../Pages/Login&Registration/Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Registration></Registration>
    },
    {
      path: '/courses',
      element: <Courses></Courses>,
      loader:() => fetch('https://eduskill-server.vercel.app/courses')
    },
    {
      path:'/course/:id',
      element:<CoursesDetails></CoursesDetails>,
      loader:({params})=>fetch(`https://eduskill-server.vercel.app/course/${params.id}`)
    },

    {
      path:'/checkout',
    element:<CheckOut></CheckOut>
    },
    {
      path: '/blog',
      element: <Blogs></Blogs>
    },
    {
      path: '/faq',
      element: <FAQ></FAQ>
    }]
  },
  {
    path:'*',
    element:<Error404></Error404>
  }
]);
