import React from 'react';
import {
  Alert,
  Button,
  Platform,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
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

export default function NaverLoginComponent({
  success,
  fail,
}: NaverLoginProps) {
  const [naverToken, setNaverToken] = React.useState(null);

  const naverLogin = async (props: any) => {
    return new Promise((resolve, reject) => {
      NaverLogin.login(props, async (err, token: any) => {
        setNaverToken(token);
        const profile = await getProfile(token.accessToken);

        if (err) {
          reject(err);
          fail(err);
          return;
        }
        resolve(profile);
        success(profile);
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
    console.log('profileResult', profileResult);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => naverLogin(initials)}>
      <Text>네이버 로그인</Text>
      {!!naverToken && <Button title="로그아웃하기" onPress={naverLogout} />}
      {!!naverToken && (
        <Button title="회원정보 가져오기" onPress={getUserProfile} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
});
