import React, {FC} from "react";
import {IHeaderProps} from "./Header.props";
import Auth from "./Auth/Auth";

const Header:FC<IHeaderProps> = () => {
    return (
        <header>
            <Auth/>
        </header>
    )
}

export default Header

