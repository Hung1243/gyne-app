import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import BlogScreen from '../screens/blog/BlogScreen';
import { HomeStackParamList } from './types';
import BlogListScreen from '../screens/blog/BlogListScreen';

const Stack = createStackNavigator<HomeStackParamList>();

export function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={HomeScreen} />
      <Stack.Screen name="BlogList" component={BlogListScreen} />
      <Stack.Screen name="Blog" component={BlogScreen} />
    </Stack.Navigator>
  );
}
