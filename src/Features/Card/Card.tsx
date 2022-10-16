import React, {FC} from "react"
import {ICardProps} from "./Card.props";

const Card: FC<ICardProps> = ({children}, props): JSX.Element => {
    return (
        <div  {...props}>
            {children}
        </div>
    )
}

export default Card

