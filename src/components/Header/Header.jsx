import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logout from './../assets/images/logout.png'
import logo from './../assets/images/logo.png'


const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.login}>{props.isAuth
                ?<div>{props.login}<div className={s.logout} onClick={props.getUnLogin}><img src={logout}/></div></div>
                :<NavLink to={'/login'}>Login</NavLink>}
            </div>
            <div className={s.logo}><img src={logo}/></div>
        </div>
    )
}

export default Header;