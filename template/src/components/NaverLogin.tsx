import React from 'react';
import { Alert, Button, Platform, View } from 'react-native';
import { NaverLogin, getProfile } from '@react-native-seoul/naver-login';

interface NaverLoginProps {
  success: Function;
  fail: Function;
}

const iosKeys = {
  kConsumerKey: 'gDSlwK4LOr_cjDAs4tLb',
  kConsumerSecret: 'fO5FqYMWcd',
  kServiceAppName: '김프로',
  kServiceAppUrlScheme: 'naverlogin', // only for iOS
};

const androidKeys = {
  kConsumerKey: 'gDSlwK4LOr_cjDAs4tLb',
  kConsumerSecret: 'fO5FqYMWcd',
  kServiceAppName: '김프로',
};

const initials = Platform.OS === 'ios' ? iosKeys : androidKeys;

export default function NaverLoginComponent({ success, fail }: NaverLoginProps) {
  const [naverToken, setNaverToken] = React.useState(null);

  const naverLogin = (props: any) => {
    return new Promise((resolve, reject) => {
      NaverLogin.login(props, (err, token: any) => {
        console.log(`\n\n  Token is fetched  :: ${token} \n\n`);
        setNaverToken(token);
        getUserProfile();
        if (err) {
          reject(err);
          fail();
          return;
        }
        resolve(token);
      });
    });
  };

  const naverLogout = () => {
    NaverLogin.logout();
    setNaverToken(null);
  };

  const getUserProfile = async () => {
    const profileResult = await getProfile(naverToken?.accessToken);
    if (profileResult.resultcode === '024') {
      Alert.alert('로그인 실패', profileResult.message);
      return;
    }
    success(profileResult);
    console.log('profileResult', profileResult);
  };

  return (
    <View>
      <Button
        title="네이버 아이디로 로그인하기"
        onPress={() => naverLogin(initials)}
      />
      {!!naverToken && <Button title="로그아웃하기" onPress={naverLogout} />}

      {!!naverToken && (
        <Button title="회원정보 가져오기" onPress={getUserProfile} />
      )}
    </View>
  );
}
