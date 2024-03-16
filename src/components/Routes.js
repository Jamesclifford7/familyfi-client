import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Landing from './Landing'
import AccountOverview from './AccountOverview'

export default function AppRoutes() {
    return (
        <Routes>
            <Route 
                exact path="/"
                element={<Landing />}
            />
            <Route 
                path="/account_overview"
                element={<AccountOverview />}
            />
        </Routes>
    )
}

