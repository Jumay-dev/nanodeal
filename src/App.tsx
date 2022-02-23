import React from 'react';
import './App.css';
import { Card } from './components/Card'
import { Sidebar } from "./components/Sidebar";
import userpic from './assets/user-avatar.png'
import { Filter } from "./components/Filter";
import { MobileHeader } from "./components/MobileHeader";
import {Search} from "./components/Search";

function App() {
  return (
    <div className="root">
      <div className="layout">
        <MobileHeader />
        <Sidebar />
        <div className="dashboard">
          <div className="mobile__title">Предложения</div>
          <div className="dashboard__header">
            <div className="header__title">Предложения</div>
            <div className="header__corner">
              <div className="search-container">
                <Search />
              </div>
              <div className="userpic">
                <img src={userpic} alt="..."/>
              </div>
            </div>
          </div>
          <Filter />
          <div className="divider" />
          <div className="mobile-search-container">
            <Search />
          </div>
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
