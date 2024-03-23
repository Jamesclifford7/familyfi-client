import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useUserContext, UserContextProps } from './UserProvider'

export interface MarketplaceBusinessProps {
    id: number
    category: string
    name: string
    url: string
    logo: string
}

const MarketplaceContext = React.createContext<MarketplaceBusinessProps[] | undefined>(undefined)

export default function MarketplaceProvider(props: {children: JSX.Element}) {
    const [marketplaceBusinesses, setMarketplaceBusinesses] = useState<MarketplaceBusinessProps[]>([])
    const user = useUserContext() as UserContextProps

    useEffect(() => {
        // Fetch user information from API when component mounts
        const token = localStorage.getItem('user') || user.token;

        if (token) {
            axios({
                method: 'get', 
                url: `${process.env.REACT_APP_HEROKU_API_URL}/marketplace`, 
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${token}` // Include JWT token in request headers
                }
            })
            .then((res) => {
                setMarketplaceBusinesses(res.data)
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching user information:', error);
            });
        }
    }, [user])

    // Return the user state in the context provider value
    return (
        <MarketplaceContext.Provider value={marketplaceBusinesses}>
            {props.children}
        </MarketplaceContext.Provider>
    );
}

export function useMarketplaceContext() {
    const context = React.useContext(MarketplaceContext)

    if (!context) {
        throw new Error('useMarketplaceContext must be used within MarketplaceProvider')
    }

    return context
}
