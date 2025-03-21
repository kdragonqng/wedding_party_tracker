import 'reflect-metadata';
import { container } from 'tsyringe';
import React, { useEffect, useState } from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import NavigationContainerComponents from './src/common/components/NavigationContainerComponents';
// import AppStyle from './App.style';
import { LanguageService } from './src/services/logic/languageSerivce';
import { AuthProvider } from './src/contexts/AuthContext';
import { getApps } from "@react-native-firebase/app";
import { initializeApp } from 'firebase/app';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

function App(): React.JSX.Element {
  const languageService = container.resolve(LanguageService);
  const [isReady, setIsReady] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  // const appStyle = AppStyle();
  const statusbarColor = {
    backgroundColor: isDarkMode ? Colors.light : Colors.dark
  };

  function checkFirebase() {
    if (getApps().length === 0) {
      initializeApp(); // Không cần truyền config, vì lấy từ google-services.json
      console.log("Firebase initialized!");
    }
  };

  function initGoogle() {
    GoogleSignin.configure({

      // Client ID of type WEB for your server (needed
      // to verify user ID and offline access)
      webClientId: '245294411797-234vk98gap0jcfs0ciin9o4j87nfe5fj.apps.googleusercontent.com',
    });

  }

  async function init(): Promise<void> {
    await languageService.initLanguage();
    checkFirebase();
    initGoogle();
    setIsReady(true);
  }

  useEffect(() => {
    // userEffect implement here
    init();
  }, []);

  if (isReady) {
    return (
      <AuthProvider>
        <StatusBar
          // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={statusbarColor.backgroundColor}
        />
        <NavigationContainerComponents />
      </AuthProvider>

    );
  }
  else {
    return (
      <AuthProvider>
        <View></View>
      </AuthProvider>
    );
  }
}

export default App;
