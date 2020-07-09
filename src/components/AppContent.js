import React from 'react'
import '../styles/AppContent.scss'
import AppMainTable from './AppMainTable'
import AppNotification from './AppNotification'

const Content = () => {
    return (
        <main className="app-content">
            <AppMainTable />
            <AppNotification />
        </main>
    );
}

export default Content;
