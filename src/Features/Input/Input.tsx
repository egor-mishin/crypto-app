import React, {FC} from "react"
import { IInputProps } from "./Input.props"

const Input: FC<IInputProps> = (props): JSX.Element => {
    return (
        <input
            {...props}
        />
    )
}

export default Input

