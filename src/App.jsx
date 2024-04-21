import {About, Cart, Landing, Error, HomeLayout, Checkout, Orders, Products, SingleProduct, Register, Login, } from './Pages';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Create Router Instance 
// Create defined Route configuration for each page.
// Define an array of route objects, each representing a different route in your application. 
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
        {
        index: true,
        element: <Landing />
      },
      {
        path:'products',
        element: <Products />
      },
      {
        path:'products/:id',
        element: <SingleProduct />,
      },
      {
        path:'cart',
        element: <Cart />
      },
      {
        path:'about',
        element: <About />
      },
      {
        path:'checkout',
        element: <Checkout />
      },
      {
        path:'orders',
        element: <Orders />
      },
    ]
  },
  {
        path:'/login',
        element: <Login />,
  },
  {
    path:'/register',
    element: <Register />,
  },
])

// Define App functional Component
// Return a RouteProvider component and pass the router object as a prop.
const App = () => {
  return <RouterProvider router = {router} />
};

export default App;








