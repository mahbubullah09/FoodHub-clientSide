import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Mainlayout from './assets/layout/Mainlayout';
import Home from './component/Home/home';
import BrandDetails from './component/Home/BrandDetails';


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
        path: '/brands/:name',
        element:<BrandDetails/>,
        loader: () => fetch('/brand.json')
      },
      {
        path:'/addproduct',
        element:<h3>add product</h3>
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
