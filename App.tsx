
import React from 'react';
import MainNav from './src/navigation/mainnav';
import { AuthPorovider } from './src/context/AuthContext';
import { Text } from 'react-native';

const App = () => {
  return(
    <AuthPorovider>
      <MainNav/>
    </AuthPorovider>
  )
};

export default App;
