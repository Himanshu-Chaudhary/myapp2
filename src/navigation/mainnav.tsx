import React, { FC, useEffect, useState, useContext } from "react"
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from "./authStack"
import { ActivityIndicator, Alert, Text, View } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "../screens";
import AppStack from "./appStack";
import {AuthContext, AuthPorovider} from "../context/AuthContext"

const Stack = createNativeStackNavigator();

const MainNav : FC = () => {
    const {userToken} = useContext(AuthContext)

    if (userToken !== null){
        Alert.alert("nonNull",userToken)
    } else if (userToken === "") {
        Alert.alert("empty",userToken)
    } else {
        Alert.alert("null",userToken)
    }
    

    return (
        <NavigationContainer>
            {userToken !== null ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}

export default MainNav