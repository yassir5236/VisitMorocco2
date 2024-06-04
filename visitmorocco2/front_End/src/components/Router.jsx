import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/guest/Home.jsx';
import Register from './pages/guest/Register.jsx';
import Login from './pages/guest/Login.jsx'
import NotFond from './pages/NotFond.jsx';

const Router = createBrowserRouter([

  

    {
        path: '/',
        element: <Home />
    },
    {
        path: '/About',
        element: <h1>About</h1>
    },
    {
        path: '/Contact',
        element: <h1>Contact</h1>
    },
    {
        path: '/Login',
        element: <Login />
    },
    {
        path: '/Register',
        element: <Register />
    },
    {
        path: '/Profile',
        element: <h1>Profile</h1>
    },
    {
        path: '/Destination',
        element: <h1>Destination</h1>
    },
    {
        path: '/Destination/:id',
        element: <h1>Destination</h1>
    },
  
    {
        path: '*',
        element: <NotFond />
    },
])


export default Router






