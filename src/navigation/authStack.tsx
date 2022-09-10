import React, {FC}  from "react"
import { SignUp, Login, InstaScheduler } from "../screens"
import { createStackNavigator } from "@react-navigation/stack";

const {Navigator, Screen} = createStackNavigator()

const AuthStack : FC = () => {
    return (
        <Navigator initialRouteName="Signup">
            <Screen name="Login" component={Login}></Screen>
        </Navigator>
    )
}

export default AuthStack