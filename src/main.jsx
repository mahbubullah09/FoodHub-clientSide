import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Mainlayout from './assets/layout/Mainlayout';
import Home from './component/Home/home';
import BrandDetails from './component/Home/BrandDetails';
import ProductDetails from './component/Home/ProductDetails';
import AddProducts from './component/Add Products/AddProducts';


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
        path: '/:name',
        element:<BrandDetails/>,
        loader: () => fetch('/brand.json')
      },
      {
        path: '/:brand_name/:product_name',
        element:<ProductDetails/>,
        loader: () => fetch('./component/fakeData.json'),
        
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
      <RouterProvider router={router} />
  </React.StrictMode>,
)
