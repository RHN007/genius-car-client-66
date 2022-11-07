import Main from "../../layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");




  const router = createBrowserRouter([
    {
      path: '/', 
      element:<Main></Main>, 
      children: [
        {
            path: '/', 
            element: <Home></Home>
        },
        {
            path:'/login', 
            element: <Login></Login>
        },
        {
            path:'/signup', 
            element: <Signup></Signup>
        },
        {
          path:'/checkout/:id', 
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>, 
          loader: ({params}) => fetch(`http://localhost:9000/services/${params.id}`)
        }, 
        {
          path: '/orders', 
          element: <PrivateRoute><Orders></Orders></PrivateRoute>
        }

      ]

    }
  ])

  export default router; 