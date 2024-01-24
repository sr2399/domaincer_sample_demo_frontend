import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';

import Navbar from './components/Navigation/appNavigator';

const App = () => {
  return (
    <div className="App">
      <Navbar />

    </div>
  );
}

export default App;