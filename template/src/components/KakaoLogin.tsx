import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  login,
  KakaoProfile,
  getProfile,
} from '@react-native-seoul/kakao-login';

interface KakaoLoginProps {
  success: Function;
  fail: Function;
}

export default function KakaoLogin({ success, fail }: KakaoLoginProps) {
  async function signIn(): Promise<void> {
    try {
      await login();
      const userInfo: KakaoProfile = await getProfile();
      success(userInfo);
    } catch (error) {
      fail();
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={signIn}>
      <Text>카카오 로그인</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    padding: 10,
  },
});
