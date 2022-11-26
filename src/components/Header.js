
import React from 'react'
import logo from '../images/logo.png'

// Header component for all pages

export default function Header() {
    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="header-logo-wrapper">
                    <a href="/">
                        <img className="header-logo" src={logo}/>
                    </a>
                </div>
                <div className="header-menu-wrapper">
                <div className="header-menu"></div>
                </div>
            </div>
        </div>
    )
}