import React, {FC} from "react"
import {IMainProps} from "./Main.props";
import css from './Main.module.scss'

const Main: FC<IMainProps> = (): JSX.Element => {
    return (
        <main className={css.main}>
            Main
        </main>
    )
}

export default Main

