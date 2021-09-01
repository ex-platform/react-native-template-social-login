import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { appleAuth } from '@invertase/react-native-apple-authentication';

const isIos = Platform.OS === 'ios';

interface AppleLoginProps {
  success: Function;
  fail: Function;
}

export default function AppleLogin({ success, fail }: AppleLoginProps) {
  if (!isIos) {
    return null;
  }

  async function login() {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      console.log(' appleAuthRequestResponse :>> ', appleAuthRequestResponse);

      success();
    } catch (error) {
      fail();
    }
  }

  return (
    isIos && (
      <TouchableOpacity style={styles.container} onPress={login}>
        <Text style={styles.text}>애플 로그인</Text>
      </TouchableOpacity>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: 'white',
  },
});
