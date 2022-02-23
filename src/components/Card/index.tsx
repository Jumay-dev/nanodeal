import React, { FC } from 'react'
import './index.css'
import logo from './assets/nike.svg'
import cardImage from './assets/card-image.png'
import gift from './assets/gift.svg'
import arrow from './assets/next.svg'
import {CardItem} from "./CardItem";

export const Card: FC<any> = () => {
  return <div className="card">
    <div className="card__header">
      <div className="brand">
        <img width="36" height="36" src={logo} alt="..."/>
        <span className="brand__text">Nike</span>
      </div>
      <div className="tag">Активное</div>
    </div>

    <div className="card__image">
      <img src={cardImage} alt="..."/>
    </div>
    <div className="card__info">
      <div className="card__title">Записать сторис в кросcовках Nike Air Max 720</div>
      <div className="card__gift">
        <img src={gift} alt="..."/>
        <span className="card__gift_text">Репост строис в официальном аккаунте NikeRussia</span>
      </div>
      <div className="divider" />
      <CardItem>
        <span className="item__text">Новые сообщения</span>
        <div className="item__actions">
          <div className={`actions__counter`}>55</div>
          <img src={arrow} alt="..."/>
        </div>
      </CardItem>
      <div className="divider" />
      <CardItem>
        <span className="item__text">Новые заявки</span>
        <div className="item__actions">
          <div className={`actions__counter actions__counter_disabled`}>0</div>
          <img src={arrow} alt="..."/>
        </div>
      </CardItem>
      <CardItem>
        <span className="item__text">До завершения</span>
        <div className="item__countdown">
          1н : 2д : 23ч : 20м : 10с
        </div>
      </CardItem>
      <CardItem>
        <span className="item__text">Выполнено</span>
        <div className="item__status">
          250 / 3000
        </div>
      </CardItem>
    </div>
  </div>
}