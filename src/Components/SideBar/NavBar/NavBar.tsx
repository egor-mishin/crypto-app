import React, { FC } from 'react'
import { routes } from '../routes'
import { Link } from 'react-router-dom'

const NavBar: FC = (): JSX.Element => {
    return (
        <nav>
            {routes.map((r, i) => <li key={`${i}-"link"`}><Link to={Object.values(r)[0]}>{Object.keys(r)[0]}</Link>
            </li>)}
        </nav>
    )
}

export default NavBar

