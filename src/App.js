import React from 'react';
import './App.css';
import DashboardContainer from './redux/DashboardContainer';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1>Rio Tinto</h1>
            <p>At Rio Tinto, we know our future is even brighter than our past.</p>
            <DashboardContainer />
        </header>
    </div>
  );
}

export default App;
