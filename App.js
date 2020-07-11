import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Montserrat_400Regular, Montserrat_700Bold, Montserrat_300Light ,useFonts } from '@expo-google-fonts/montserrat';

import Navigation from './src/Navigation';

export default function App() {

	let [fontsLoaded] = useFonts({
		Montserrat_300Light,
		Montserrat_400Regular,
		Montserrat_700Bold
	});

	if(!fontsLoaded){
		return <Text>Loading</Text>
	  }else{
		return (
			<NavigationContainer>
			  <Navigation />
			</NavigationContainer>
		);
	  }
}
