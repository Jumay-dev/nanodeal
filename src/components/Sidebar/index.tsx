import React, { FC } from 'react'
import './index.css'
import logo from '../../assets/logo.svg'
import dashboard from './assets/dashboard.svg'
import offers from './assets/offers.svg'
import addNew from './assets/add-new.svg'
import billing from './assets/billing.svg'
import profile from './assets/profile.svg'
import stats from './assets/stats.svg'
import support from './assets/support.svg'

export const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="..."/>
      </div>
      <div className="menu-points">
        <div className="sidebar__item">
          <img src={dashboard} alt="..."/>
          Dashboard
        </div>
        <div className="sidebar__item sidebar__item_active">
          <img src={offers} alt="..."/>
          Предложения
        </div>
        <div className="sidebar__item">
          <img src={addNew} alt="..."/>
          Добавить новое
        </div>
        <div className="sidebar__item">
          <img src={stats} alt="..."/>
          Статистика
        </div>
        <div className="sidebar__item">
          <img src={profile} alt="..."/>
          Профиль
        </div>
        <div className="sidebar__item">
          <img src={support} alt="..."/>
          Поддержка
        </div>
        <div className="sidebar__item">
          <img src={billing} alt="..."/>
          Billing
        </div>
      </div>
    </div>
  )
}