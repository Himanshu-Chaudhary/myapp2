import React, {FC, useContext} from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

const App : FC = () => {

    const {login} = useContext(AuthContext)

    return(
        <View style={styles.container}>
           <Text>Logged In Screen</Text>
           <Button
           title='login'
           onPress={() => {
            login("sadasd")
        }}
           />
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