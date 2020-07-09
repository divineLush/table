import React from 'react';
import '../styles/AppNotification.scss'
import Button from 'react-bootstrap/Button'
import { ExclamationCircleFill } from 'react-bootstrap-icons'

const AppNotification = () => {
    return (
        <div className="app-notification">
            <div className="app-notification__header">
                <div className="app-notification__header__title">
                    <ExclamationCircleFill className="app-notification__header__title__icon" size={20} />
                    <span className="app-notification__header__title__text">Уведомление</span>
                </div>
                <span>10:15</span>
            </div>
            <div className="app-notification__body">
                <p className="app-notification__body__text">Поступила новая рекомендация</p>
                <Button className="app-notification__body__btn" variant="outline-dark" size="sm">OK</Button>
            </div>
        </div>
    );
}

export default AppNotification;
