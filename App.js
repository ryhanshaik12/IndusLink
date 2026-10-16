import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/stores/AuthContext';
import { CartProvider } from './src/stores/CartContext';
import Marketplace from './src/pages/Marketplace';
import Cart from './src/pages/Cart';
import Orders from './src/pages/Orders';
import Profile from './src/pages/Profile';
import BuyerLogin from './src/pages/BuyerLogin';
import SellerLogin from './src/pages/SellerLogin';
import SellerDashboard from './src/pages/SellerDashboard';
import ChatBot from './src/pages/ChatBot';
import AdminLogin from './src/pages/AdminLogin';
import AdminDashboard from './src/pages/AdminDashboard';
import AdminSellerDetail from './src/pages/AdminSellerDetail';
import AdminBuyerDetail from './src/pages/AdminBuyerDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#38bdf8',
        tabBarInactiveTintColor: '#6b7280',
        tabBarStyle: {
          backgroundColor: '#020617',
          borderTopColor: '#1f2937',
        },
        headerStyle: {
          backgroundColor: '#020617',
        },
        headerTintColor: '#e5e7eb',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#f9fafb',
        },
      }}
    >
      <Tab.Screen 
        name="Marketplace" 
        component={Marketplace}
        options={{
          tabBarIcon: () => '🏪',
        }}
      />
      <Tab.Screen 
        name="Cart" 
        component={Cart}
        options={{
          tabBarIcon: () => '🛒',
        }}
      />
      <Tab.Screen 
        name="Orders" 
        component={Orders}
        options={{
          tabBarIcon: () => '📦',
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: () => '👤',
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#020617',
          },
          headerTintColor: '#e5e7eb',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="MainTabs" 
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="BuyerLogin" 
          component={BuyerLogin}
          options={{ title: 'Buyer Account' }}
        />
        <Stack.Screen 
          name="SellerLogin" 
          component={SellerLogin}
          options={{ title: 'Seller Account' }}
        />
        <Stack.Screen 
          name="SellerDashboard" 
          component={SellerDashboard}
          options={{ title: 'Seller Dashboard' }}
        />
        <Stack.Screen 
          name="AdminLogin" 
          component={AdminLogin}
          options={{ title: 'Admin Access' }}
        />
        <Stack.Screen 
          name="AdminDashboard" 
          component={AdminDashboard}
          options={{ title: 'Admin Dashboard' }}
        />
        <Stack.Screen 
          name="AdminSellerDetail" 
          component={AdminSellerDetail}
          options={{ title: 'Seller Overview' }}
        />
        <Stack.Screen 
          name="AdminBuyerDetail" 
          component={AdminBuyerDetail}
          options={{ title: 'Buyer Overview' }}
        />
        <Stack.Screen 
          name="ChatBot" 
          component={ChatBot}
          options={{ title: 'Chat Support' }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppNavigator />
      </CartProvider>
    </AuthProvider>
  );
}
