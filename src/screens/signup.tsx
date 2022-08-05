import React, {FC, useContext} from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import { AuthContext } from '../context/AuthContext'

const App : FC = () => {

    const {login} = useContext(AuthContext)

    return(
        <View style={styles.container}>
           <Text>SignUp Screen</Text>
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignContent : 'center'
    }
})