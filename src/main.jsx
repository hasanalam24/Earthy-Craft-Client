import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import AllCraftsItems from './Pages/AllCraftsItems/AllCraftsItems.jsx';
import AddCraft from './Pages/AddCraft/AddCraft.jsx';
import MyCraftList from './Pages/MyCraftList/MyCraftList.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allartcraft',
        element: <AllCraftsItems></AllCraftsItems>
      },
      {
        path: '/addcraft',
        element: <AddCraft></AddCraft>
      },
      {
        path: '/mycraftlist',
        element: <MyCraftList></MyCraftList>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
