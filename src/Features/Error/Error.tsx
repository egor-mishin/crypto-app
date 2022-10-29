import React, { FC } from 'react'
import { IError } from './Erorr.interface'
import { Htag } from '../index'
import { getError } from '../../Utils/functions'
import css from './Error.module.scss'

const Error: FC<IError> = ({errorCode}): JSX.Element => {
    return (
        <div className={css.container}>
          <Htag tag={'h2'}>{errorCode && `Error ${errorCode}. ${getError(errorCode)}`}</Htag>
        </div>
    )
}

export default Error

