import React, {useState, useEffect, Dispatch, SetStateAction} from 'react'
import axios from 'axios'

export interface UserProps {
    id: number, 
    firstName: string, 
    lastName: string, 
    email: string, 
    password: string, 
    accountCreated: string, 
    iat: number, 
    exp: number, 
}

export interface UserContextProps {
    user: UserProps
    setUser: Dispatch<SetStateAction<{}>>
}

const UserContext = React.createContext<UserContextProps | undefined | {}>(undefined)

export default function UserProvider(props: {children: JSX.Element}) {
    const [user, setUser] = useState<UserProps | {}>({})
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        // Fetch user information from API when component mounts
        const token = localStorage.getItem('user');
        
        if (token) {
            axios({
                method: 'get', 
                url: `${process.env.REACT_APP_API_URL}/user`, 
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${token}` // Include JWT token in request headers
                }
            })
            .then((res) => {
                // Update user state with user information from API response
                const reformattedUser: UserProps = {
                    firstName: res.data.first_name, 
                    lastName: res.data.last_name, 
                    accountCreated: res.data.account_created, 
                    ...res.data
                }
                setUser(reformattedUser); 
                setLoading(false); 
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching user information:', error);
                setLoading(false); 
            });
        }

        setLoading(false)
    }, [])

    if (loading) {
        return <div>loading...</div>
    }

    
    // Return the user state in the context provider value
    return (
        <UserContext.Provider value={{
            user, 
            setUser
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    const context = React.useContext(UserContext)

    if (!context) {
        throw new Error('useUserContext must be used within UserProvider')
    }

    return context
}
