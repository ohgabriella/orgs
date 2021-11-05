import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { useFonts,  
  Montserrat_400Regular, 
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import Cesta from "./src/telas/Cesta";
import mock from './src/mocks/cesta';

import GeneralStatusBarColor from './src/components/GeneralStatusBarColor';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <View style={{ flex: 1 }}>
      <GeneralStatusBarColor backgroundColor="#3B3C3C" barStyle="light-content"/>
      <Cesta {...mock}/>
    </View>
  );
}