import React, { FC } from 'react'
import './index.css'
import active from './assets/active.svg'
import moderate from './assets/moderate.svg'
import drafts from './assets/drafts.svg'
import archieve from './assets/archieve.svg'

export const Filter: FC = () => {
  return (
    <div className="filter">
      <div className="filter__item filter__item_active">
        <img src={active}/>
        Активные
      </div>
      <div className="filter__item">
        <img src={moderate}/>
        На модерации
      </div>
      <div className="filter__item">
        <img src={drafts}/>
        Черновики
      </div>
      <div className="filter__item">
        <img src={archieve}/>
        Архив
      </div>
    </div>
  )
}