import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom';
import Landing from './Landing'
import AccountOverview from './AccountOverview'
import Marketplace from './Marketplace';
import Deals from './Deals'

interface ProtectedRouteProps {
    isAuthorized: () => boolean;
    children: React.JSX.Element;
}

export default function AppRoutes() {
    return (
        <Routes>
            <Route 
                path="/"
                element={<Landing />}
            />
            <Route 
                path="/account_overview"
                element={
                    <ProtectedRoute
                        isAuthorized={isAuthorized}
                    >
                        <AccountOverview />
                    </ProtectedRoute>
                }
            />
            <Route 
                path="/marketplace"
                element={
                    <ProtectedRoute
                        isAuthorized={isAuthorized}
                    >
                        <Marketplace />
                    </ProtectedRoute>
                }
            />
            <Route 
                path="/deals"
                element={
                    <ProtectedRoute
                        isAuthorized={isAuthorized}
                    >
                        <Deals />
                    </ProtectedRoute>
                }
            />
        </Routes>
    )
}

function isAuthorized() {
    const token = localStorage.getItem('user');

    if (token) {
        return true
    }

    return false
}

function ProtectedRoute(props: ProtectedRouteProps) {
    const {isAuthorized, children} = props

    const authorized = isAuthorized()

    if (authorized) {
        return children
    }

    return <Navigate to="/"/>
}

