import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Error404 from "../../Pages/404Error/Error404";
import Blogs from "../../Pages/Blogs/Blogs";
import Courses from "../../Pages/Courses/Courses";
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
      element: <PrivateRoute>
        <Courses></Courses>
      </PrivateRoute>
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
