import React, {FC} from "react"
import {ILayoutProps} from "./Layout.props"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: FC<ILayoutProps> = ({children}): JSX.Element => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout

