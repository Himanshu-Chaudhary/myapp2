import React, {FC}  from "react";
import { InstaScheduler} from "../screens";
import { createStackNavigator } from "@react-navigation/stack";

const {Navigator, Screen} = createStackNavigator()

const AppStack : FC = () => {
    return (
        <Navigator>
            <Screen name="Scheduler" component={InstaScheduler}></Screen>
        </Navigator>
    )
}

export default AppStack