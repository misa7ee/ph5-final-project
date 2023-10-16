import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// COMPONENTS
import App from "./App";
import Homepage from "./components/Homepage"
import ClothingItemList from "./components/ClothingItemList";
import Closet from "./components/Closet"
// import NavBar from "./components/NavBar"
// import ClothingItemCard from "./components/ClothingItemCard"


// LOADERS

const router = createBrowserRouter([
    {
    path: "/",
    element: <App/>,
    children: [
        {
        index: true,
        element: <Homepage/>
       },
       {
        path: "/collection",
        element: <ClothingItemList/>
       },
       {
        path: "/closet",
        element: <Closet/>
       }
    ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>
);
