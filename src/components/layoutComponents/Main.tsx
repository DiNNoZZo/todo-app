import { IComponent } from '@/types/global.types'
import React, { FC } from 'react'

interface IMain extends IComponent {}

const Main: FC<IMain> = ({children, className}) => {
  return (
    <main className={className}>{children}</main>
  )
}

export default Main