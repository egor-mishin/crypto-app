import React, { FC } from 'react'
import icon from './Assets/avatar.svg'

const Avatar: FC<{picture?: string }> = ({picture}): JSX.Element => {
    return (
        <>
            <img src={picture ? picture : icon} alt='Avatar'  width={35} height={35}/>
        </>
    )
}

export default Avatar

