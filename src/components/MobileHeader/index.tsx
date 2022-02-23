import React, { FC } from 'react'
import './index.css'
import burger from '../../assets/burger.svg'
import logo from '../../assets/logo.svg'
import userPic from '../../assets/user-avatar.png'

export const MobileHeader: FC = () => {
  return (
    <div className="mobile-header">
      <img src={burger} alt="..."/>
      <img src={logo} alt="..."/>
      <div className="userpic">
        <img src={userPic} alt="..."/>
      </div>
    </div>
  )
}