import React from 'react'
import '../styles/AppContent.scss'
import AppMainTable from './AppMainTable'
import AppNotification from './AppNotification'
import AppSmallTable from './AppSmallTable'

const Content = () => {
    return (
        <main className="app-content">
            <AppMainTable />
            <AppNotification />
            <AppSmallTable />
        </main>
    );
}

export default Content;
