

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';

import Home from './components/pages/guest/Home.jsx'
import Register from './components/pages/guest/Register.jsx';
import Login from './components/pages/guest/Login.jsx'
import NotFond from './components/pages/NotFond.jsx';
import Add from './components/sections/Destination/Add.jsx';
import Dashboard from './components/pages/Admin/Dashboard.jsx';
// import AddRegionForm from './components/pages/Admin/AddRegionForm.jsx';

// import Protected from './components/Protected.jsx';
// import Destination from './components/sections/Destination/Destination.jsx';

const App = () => {
  return (

    <>
      <Router>

        <Routes>

          <Route path='/' element={<Home />} />
          {/* <Route path='/AddRegionForm' element={<AddRegionForm />} /> */}
          {/* <Route path='/ListRegion' element={<ListRegion />} /> */}


          
          <Route path='/Destinations' element={<h1>Destination</h1>} />
        
          <Route path='/AddDestination' element={<Add />} />



          <Route path='/About' element={<h1>About</h1>} />
          <Route path='/Contact' element={<h1>Contact</h1>}  />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/' element={<NotFond />} />
          <Route path='/Dashboard' element={<Dashboard/>} />




        </Routes>



      </Router>
    </>

  )
}

export default App


