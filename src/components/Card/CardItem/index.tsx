import React, { FC } from 'react'

export const CardItem: FC = ({ children }) => {
  return (
  <div className="info__item">
    {children}
  </div>
  )
}