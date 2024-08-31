/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AppRoutes from './src/routes/AppRoutes';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

function App(): React.JSX.Element {
  
  return (
      <>
        <ThemeProvider theme={theme}>
          <StatusBar backgroundColor='#292B37'/>
          <AppRoutes />
        </ThemeProvider>
      </>
  );
}

export default App;
