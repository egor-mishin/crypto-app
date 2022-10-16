import React, {FC} from "react"
import {IButtonProps} from "./Button.props";

const Button: FC<IButtonProps> = ({children}): JSX.Element => {
    return (
        <button>
            {children}
        </button>
    )
}

export default Button

