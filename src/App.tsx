import React from 'react';
import './App.css';
import { Card } from './components/Card'
import { Sidebar } from "./components/Sidebar";
import userpic from './assets/user-avatar.png'
import {Filter} from "./components/Filter";

function App() {
  return (
    <div className="root">
      <div className="layout">
        <Sidebar />
        <div className="dashboard">
          <div className="dashboard__header">
            <div className="header__title">Предложения</div>
            <div className="header__corner">
              <div className="userpic">
                <img src={userpic}/>
              </div>
            </div>
          </div>
          <Filter />
          <div className="divider" />
          <div className="card-container">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
