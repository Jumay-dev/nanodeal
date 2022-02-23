import React, { FC } from 'react'
import './index.css'
import logo from './assets/logo.svg'
import dashboard from './assets/dashboard.svg'
import offers from './assets/offers.svg'

export const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo}/>
      </div>
      <div className="menu-points">
        <div className="sidebar__item">
          <img src={dashboard}/>
          Dashboard
        </div>
        <div className="sidebar__item sidebar__item_active">
          <img src={offers}/>
          Предложения
        </div>
        <div className="sidebar__item">
          <img src={dashboard}/>
          Добавить новое
        </div>
        <div className="sidebar__item">
          <img src={dashboard}/>
          Статистика
        </div>
        <div className="sidebar__item">
          <img src={dashboard}/>
          Профиль
        </div>
        <div className="sidebar__item">
          <img src={dashboard}/>
          Поддержка
        </div>
        <div className="sidebar__item">
          <img src={dashboard}/>
          Billing
        </div>
      </div>
    </div>
  )
}