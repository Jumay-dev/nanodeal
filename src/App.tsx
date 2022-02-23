import React from 'react';
import './App.css';
import { Card } from './components/Card'
import {Sidebar} from "./components/Sidebar";

function App() {
  return (
    <div className="root">
      <div className="layout">
        <Sidebar />
        <div className="dashboard">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
