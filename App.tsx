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
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App(): React.JSX.Element {
  
  return (
      <>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <StatusBar backgroundColor='#292B37'/>
            <AppRoutes />
          </ThemeProvider>
        </Provider>
      </>
  );
}

export default App;
