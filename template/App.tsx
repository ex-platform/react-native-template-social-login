/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';

import AppleLogin from './src/components/AppleLogin';
import KakaoLogin from './src/components/KakaoLogin';
import NaverLoginComponent from './src/components/NaverLogin';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <KakaoLogin
          success={(userInfo: any) => console.log(userInfo)}
          fail={() => console.log('FAIL')}
        />
        <AppleLogin
          success={(userInfo: any) => console.log(userInfo)}
          fail={() => console.log('FAIL')}
        />
        <NaverLoginComponent
          success={(userInfo: any) => console.log(userInfo)}
          fail={() => console.log('FAIL')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
