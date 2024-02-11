import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import UserDetails from "../Components/UserDetails/UserDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/home',
          element: <Home/>
        },
        {
          path: "/user-details/:id",
          element: <UserDetails/>,
          loader: ({ params }) =>
            fetch(
              `https://dummyjson.com/users/${params.id}`
            ),
        },
  
       
      ],
    }
   
  ]);
  export default router;