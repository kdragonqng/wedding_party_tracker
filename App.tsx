import 'reflect-metadata';
import { container } from 'tsyringe';
import React, { useEffect, useState } from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import NavigationContainerComponents from './src/common/components/NavigationContainerComponents';
// import AppStyle from './App.style';
import { LanguageService } from './src/services/logic/languageSerivce';
import { AuthProvider } from './src/contexts/AuthContext';

function App(): React.JSX.Element {
  const languageService = container.resolve(LanguageService);
  const [isReady, setIsReady] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  // const appStyle = AppStyle();
  const statusbarColor = {
    backgroundColor: isDarkMode ? Colors.light : Colors.dark
  };


  async function init(): Promise<void> {
    await languageService.initLanguage();
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
