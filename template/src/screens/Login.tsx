import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import AppleLogin from '../components/AppleLogin';
import KakaoLogin from '../components/KakaoLogin';
import NaverLoginComponent from '../components/NaverLogin';

function LoginScreen() {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
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
}

export default LoginScreen;
