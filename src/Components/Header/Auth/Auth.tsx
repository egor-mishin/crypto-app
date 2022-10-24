import React, { FC, useState } from 'react'
import { IAuth, IUser } from './Auth.interface'
import Avatar from './Avatar/Avatar'
import css from './Auth.module.scss'
import arrow from './Assets/arrow.svg'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Auth: FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0<IAuth>()
    const { user } = useAuth0<IUser>()

    const onToggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={css.auth}>
            {
                !isAuthenticated &&
                <button onClick={() => loginWithRedirect()}>Log In</button>

            }
            {
                isAuthenticated && (
                    <>
                        <button onClick={onToggleMenu}>
                            <Avatar picture={ user?.picture} />
                            {user?.name ? user.name : 'User name'} <img src={arrow} alt='arrow' width={15} height={15}
                                                                       className={isOpen ? css.rotate : ''} />
                        </button>
                        <ul className={cn(css.authMenu, {
                            [css.visible]: isOpen,
                        })}>
                            <li><Link to={'/profile'}>Profile</Link></li>
                            <li><button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button></li>
                        </ul>
                    </>
                )


            }
        </div>
    )
}

export default Auth

