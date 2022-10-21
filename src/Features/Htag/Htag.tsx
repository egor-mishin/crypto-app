import React, { FC } from 'react'
import { IHtag } from './Htag.props'
import css from './Htag.module.scss'
import cn from 'classnames'

 const Htag: FC<IHtag> = ({ children  , tag= 'h1', className ,...props}): JSX.Element => {
    switch (tag) {
        case 'h1' :
            return <h1 className={cn(css.h1, className)} {...props}>{children}</h1>
        case 'h2' :
            return <h2 className={cn(css.h2, className)} {...props}>{children}</h2>
        case 'h3' :
            return <h3 className={cn(css.h3, className)} {...props}>{children}</h3>
        case 'h4' :
            return <h4 className={cn(css.h4, className)} {...props}>{children}</h4>


    }
}

export default Htag
