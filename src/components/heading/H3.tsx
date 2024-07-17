import { IComponent } from '@/types/global.types'
import classNames from 'classnames'
import React, { FC } from 'react'

const H3: FC<IComponent<string>> = ({ children }) => {
  return (
    <h3 className={classNames('text-xl', 'text-text-light transition')}>{children}</h3>
  )
}

export default H3