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
import AuthProvider from './firebase/AuthProvider.jsx';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import ErrorPage from './Components/ErrorElement/ErrorPage.jsx';
import ViewDetails from './Pages/ViewDetails/ViewDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/addcraft')
      },
      {
        path: '/allartcraft',
        element: <AllCraftsItems></AllCraftsItems>,
        loader: () => fetch('http://localhost:5000/addcraft')
      },
      {
        path: '/addcraft',
        element: <ProtectedRoute>
          <AddCraft></AddCraft>
        </ProtectedRoute>
      },
      {
        path: '/mycraftlist',
        element: <ProtectedRoute>
          <MyCraftList></MyCraftList>
        </ProtectedRoute>,

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/viewDetails/:id',
        element: <ProtectedRoute>
          <ViewDetails></ViewDetails>
        </ProtectedRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000//viewDetails/${params.id}`)
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
