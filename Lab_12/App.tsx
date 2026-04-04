import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { ProductListScreen } from './src/screens/ProductListScreen';
import { ProductDetailScreen } from './src/screens/ProductDetailScreen';
import { ComponentsShowcaseScreen } from './src/screens/ComponentsShowcaseScreen';
import { Product } from './src/data/products';

type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
  ComponentsShowcase: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator 
          initialRouteName="ProductList"
          screenOptions={{
            headerStyle: { backgroundColor: '#0066cc' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen 
            name="ProductList" 
            component={ProductListScreen} 
            options={{ title: 'Product Catalog' }} 
          />
          <Stack.Screen 
            name="ProductDetail" 
            component={ProductDetailScreen} 
            options={({ route }) => ({ title: route.params.product.name })} 
          />
          <Stack.Screen
            name="ComponentsShowcase"
            component={ComponentsShowcaseScreen}
            options={{ title: 'Components Demo' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}