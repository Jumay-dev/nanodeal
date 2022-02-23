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
          <img src={addNew}/>
          Добавить новое
        </div>
        <div className="sidebar__item">
          <img src={stats}/>
          Статистика
        </div>
        <div className="sidebar__item">
          <img src={profile}/>
          Профиль
        </div>
        <div className="sidebar__item">
          <img src={support}/>
          Поддержка
        </div>
        <div className="sidebar__item">
          <img src={billing}/>
          Billing
        </div>
      </div>
    </div>
  )
}