import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Paises from './Screens/Paises';
import Maravillas from './Screens/Maravillas';
// (Si vas a implementar Recetas más abajo, importa la pantalla)
import Recetas from './screens/Recetas';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarInactiveTintColor: "#f48b28",
          tabBarActiveTintColor: "#633204",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Paises') {
              iconName = Platform.OS === 'ios' ? 'earth-outline' : 'earth';
            } else if (route.name === 'Maravilla') {
              iconName = Platform.OS === 'ios' ? 'list-outline' : 'list';
            } else if (route.name === 'Recetas') {
              iconName = Platform.OS === 'ios' ? 'restaurant-outline' : 'restaurant';
            } else {
              iconName = 'ellipse';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Paises" component={Paises} />
        <Tab.Screen name="Maravilla" component={Maravillas} />
        <Tab.Screen name="Recetas" component={Recetas} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1', padding: 8 },
});
