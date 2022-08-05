import React, {Children, createContext, useState} from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native'

export const AuthContext = createContext()

export const AuthPorovider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [userToken, setUserToken] = useState(null)

    const login = (token) => {
        setUserToken(token)
        setIsLoading(false)
    }

    const logout = () => {
        setUserToken(null)
        setIsLoading(true)
    }
     return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken, setUserToken}}>
            {children}
        </AuthContext.Provider>
    )
}