import './Header.scss';
import React,{useState, useEffect} from 'react';
import { ReactComponent as SunIcon } from '../assets/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../assets/icon-moon.svg';


function Header() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const saved = localStorage.getItem("theme");
        return saved ? (saved as 'light' | 'dark') : 'light';
    });

    const themeToggle = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme as 'light' | 'dark');
            document.body.className = savedTheme;
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.body.className = theme;
    }, [theme]);

    return (
        <div className='header-container'>
            <header className="header">
                <div className="header__logo">
                    <span>ToDo</span>
                </div>
                <div className="header__btn">
                    <button className='theme-btn' id='theme-btn' onClick={themeToggle}>
                        {theme === 'light' ? <MoonIcon className='moon-icon' /> : <SunIcon className='sun-icon' /> }
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Header;
      