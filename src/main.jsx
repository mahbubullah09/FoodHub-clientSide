import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Mainlayout from './assets/layout/Mainlayout';
import Home from './component/Home/home';
import BrandDetails from './component/Home/BrandDetails';
import ProductDetails from './component/Home/ProductDetails';
import AddProducts from './component/Add Products/AddProducts';
import Login from './component/registration/Login';
import SingUp from './component/registration/SingUp';
import AuthProvider from './Provider/authProvider';
import UpdateProduct from './component/Add Products/UpdateProduct';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch('/brand.json')
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
      {
        path: '/:name',
        element:<BrandDetails/>,
        loader: () => fetch('/brand.json')
      },
      {
        path: '/:brand_name/:product_name',
        element:<ProductDetails/>,
        loader: () => fetch('http://localhost:5000/products'),
        
      },
      {
        path: '/UpdateProduct/:id',
        element:<UpdateProduct/>,
        loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`),
        
        
      },
      {
        path:'/addproduct',
        element:<AddProducts/>
      },
      {
        path:'/mycart',
        element:<h3>My Cart</h3>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}> </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
