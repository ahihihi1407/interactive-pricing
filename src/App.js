import React from 'react';
import Card from './container/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-header">
        <div className="header-content">
          <h1>Simple, traffic-based pricing</h1>
          <p>Sign-up for our 30-day trial. No credit card required</p>
        </div>
      </div>
      <Card />
    </div >
  );
}

export default App;
