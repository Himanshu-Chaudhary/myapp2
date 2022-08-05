import React, {FC}  from "react"
import { SignUp, Login } from "../screens"
import { createStackNavigator } from "@react-navigation/stack";

const {Navigator, Screen} = createStackNavigator()

const AuthStack : FC = () => {
    return (
        <Navigator initialRouteName="Signup">
            <Screen name="signup" component={SignUp}></Screen>
        </Navigator>
    )
}

export default AuthStack