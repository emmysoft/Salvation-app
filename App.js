import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

//import components
import John316 from './components/John316';
import John1513 from './components/John1513';
import FirstJohn31 from './components/FirstJohn31';
import Landing from './components/Landing';
import Congratulations from './components/Congratulations';
import SalvationPrayer from './components/SalvationPrayer';

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Dance': require("./assets/fonts/Dancing_Script/Dance.ttf")
  });

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplashScreen();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Landing Salvation' component={Landing} options={{ headerShown: false }} />
          <Stack.Screen name="First Scripture" component={John316} options={{ headerShown: false }} />
          <Stack.Screen name="Second Scripture" component={John1513} options={{ headerShown: false }} />
          <Stack.Screen name="Third Scripture" component={FirstJohn31} options={{ headerShown: false }} />
          <Stack.Screen name="Salvation Prayer" component={SalvationPrayer} options={{ headerShown: false }} />
          <Stack.Screen name="Congratulations" component={Congratulations} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
