import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme, View } from 'tamagui';
import { CalendarScreen } from '../screens/calendar';
import { PartnerScreen } from '../screens/partner';
import { ProfileScreen } from '../screens/profile';
import { HomeStackNavigator } from './HomeStackNavigator.tsx';
import { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainTabNavigator() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.color9.val,
        tabBarInactiveTintColor: theme.gray.val,
        tabBarIconStyle: {
          marginTop: 20,
        },
        tabBarLabel: ({ focused }) => {
          if (!focused) return null;

          return (
            <View
              borderRadius={'$5'}
              width={6}
              height={6}
              backgroundColor={'$color9'}
              marginTop={4}
            ></View>
          );
        },
        tabBarItemStyle: {
          height: 100,
        },
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 24,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.2,
          shadowRadius: 6,
          height: 100,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Partner"
        component={PartnerScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
