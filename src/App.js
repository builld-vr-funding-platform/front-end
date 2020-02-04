import React, { useState } from 'react';
import Signup from './components/signup';
import TopBar from "./components/topbar"

function App() {
  return (
    <div className="App">
      <TopBar />
     <Signup />
    </div>
  );
}

export default App;
