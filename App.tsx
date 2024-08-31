/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AppRoutes from './src/routes/AppRoutes';

function App(): React.JSX.Element {
  
  return (
      <>
        <StatusBar backgroundColor='#292B37'/>
        <AppRoutes />
      </>
  );
}

export default App;
