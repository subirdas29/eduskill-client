import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login&Registration/Login/Login";
import Registration from "../../Pages/Login&Registration/Registration/Registration";



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
      path: '/blog',
      element: <Blogs></Blogs>
    },
    {
      path: '/faq',
      element: <FAQ></FAQ>
    }]
  }
]);
