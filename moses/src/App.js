import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './GraphicalComponent/Sidebar/sidebar';
import Footer from './GraphicalComponent/Footer/footer';
import {  BrowserRouter as Router }  from 'react-router-dom';
import Main from './GraphicalComponent/Main/Main';

import Dashboard from './GraphicalComponent/dashboard';


function App() {
  return (
    <div className="App">
      <Dashboard></Dashboard>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1><strong>MOSES</strong></h1>
      </header>
      <Router className="main">
        <div>
          <Sidebar></Sidebar>
          <Main></Main>
        </div>
      </Router>
      <Footer></Footer> */}
      
    </div>
  );
}

export default App;
