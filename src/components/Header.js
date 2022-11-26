
import React from 'react'
import { useState } from 'react'
import logo from '../images/logo.png'

// Header component for all pages

export default function Header() {

    const [menuStatus, setMenuStatus] = useState(false)

    const toggleMenu = () => {
        if (menuStatus) {
            setMenuStatus(false)
        } else {
            setMenuStatus(true)
        }
    }
    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="header-logo-wrapper">
                    <a href="/">
                        <img className="header-logo" src={logo}/>
                    </a>
                </div>
                <div className="header-menu-wrapper">
                <div className="header-menu" onClick={toggleMenu} ></div>
                </div>
            </div>
            <div className={menuStatus ? "hidden" : "header-menu-active"}>
                <p>Menu</p>
            </div>
        </div>
    )
}