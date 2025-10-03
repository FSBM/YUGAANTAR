import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import PageNotFound from './pages/PageNotFound/PageNotFound'
import ComingSoon from './pages/ComingSoon/ComingSoon';
// import Dashboard from './pages/Dashboard/Dashboard';

const App: React.FC = () =>{
  return(
    <Router>
      <Routes>
        <Route path = '/' element = { <Home/> }/>
        <Route path = '/contact' element = { <ContactUs/> }/>
        <Route path = '/contact-us' element = { <ContactUs/> }/>
        <Route path = '/about-us' element = { <ComingSoon/> }/>
        <Route path = '/timeline' element = { <ComingSoon/> }/>
        <Route path = '/coming-soon' element = { <ComingSoon/> }/>
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/events" element={<ComingSoon />}/>
        <Route path='/merch' element={<ComingSoon/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        {/* Catch all route for undefined paths */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};


export default App;