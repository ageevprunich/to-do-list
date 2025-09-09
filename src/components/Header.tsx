import './Header.scss';
import React from 'react';
import { ReactComponent as SunIcon } from '../assets/icon-sun.svg';



function Header() {
    return (
        <div className='header-container'>
            <header className="header">
                <div className="header__logo">
                    <span>ToDo</span>
                </div>
                <div className="header__btn">
                    <button className='theme-btn' id='theme-btn'>
                        <SunIcon className='sun-icon'/>
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Header;
      