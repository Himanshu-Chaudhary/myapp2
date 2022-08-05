import React, {FC}  from "react";
import { SignUp, Login } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";

const {Navigator, Screen} = createStackNavigator()

const AppStack : FC = () => {
    return (
        <Navigator>
            <Screen name="logged in" component={Login}></Screen>
        </Navigator>
    )
}

export default AppStack