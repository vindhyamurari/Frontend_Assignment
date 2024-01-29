import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Pages/Header/Header';
import CommonFile from './Pages/CommonFile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leads from './Pages/Leads';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='App-body'>
          <Routes>
            <Route index path='/Dashboard' element={<CommonFile screenName='Document' />} />
            <Route path='/Leads' element={<Leads screenName='Leads' />} />
            <Route path='/Opportunities' element={<CommonFile screenName='Opportunities' />} />
            <Route path='/Matches' element={<CommonFile screenName='Matches' />} />
            <Route path='/Offers' element={<CommonFile screenName='Offers' />} />
            <Route path='/Programs' element={<CommonFile screenName='Programs' />} />
            <Route path='/Lenders' element={<CommonFile screenName='Lenders' />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
