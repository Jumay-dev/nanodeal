import React, { FC } from 'react'
import './index.css'
import searchIcon from './search.svg'

export const Search: FC = () => {
  return (
    <div className="search">
      <img src={searchIcon} alt="..."/>
      <input type="text" placeholder="Поиск"/>
    </div>
  )
}