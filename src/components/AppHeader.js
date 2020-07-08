import React from 'react'
import '../styles/AppHeader.scss'
import { toUpper } from '../assets/utils'
import Logo from '../assets/logo--ru.svg'

const AppHeader = () => {
    return (
        <header className="app-header">
            <img src={Logo} alt="" className="app-header__logo" />
            <a className="app-header__link app-header__link--active" href="/">
                { toUpper('Рекомендации') }
            </a>
            <a className="app-header__link" href="/">
                { toUpper('История') }
            </a>
        </header>
    );
}

export default AppHeader;
