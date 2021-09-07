import React from 'react';
import { SafeAreaView, StatusBar, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {
  const onboardingList = [
    {
      backgroundColor: '#fff',
      image: (
        <Image
          source={{
            uri: 'https://www.gstatic.com/mobilesdk/171005_mobilesdk/discovery-cards-crashlytics.png',
          }}
          style={{ width: 300, height: 300 }}
        />
      ),
      title: 'First Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#fff',
      image: (
        <Image
          source={{
            uri: 'https://www.gstatic.com/mobilesdk/200429_mobilesdk/cloud_firestore2x.png',
          }}
          style={{ width: 300, height: 300 }}
        />
      ),
      title: 'Second Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#fff',
      image: (
        <Image
          source={{
            uri: 'https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/auth.png',
          }}
          style={{ width: 300, height: 300 }}
        />
      ),
      title: 'Third Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
  ];

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Onboarding
          onSkip={navigateToLogin}
          onDone={navigateToLogin}
          pages={onboardingList}
          bottomBarColor={'#fff'}
        />
      </SafeAreaView>
    </>
  );
};

export default OnboardingScreen;
