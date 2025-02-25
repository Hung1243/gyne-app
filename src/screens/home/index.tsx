import React from 'react';
import { YStack } from 'tamagui';
import HomeTabView from './components/home-tab-view/index';
import TopWelcome from './components/TopWelcome';

export default function HomeScreen() {
  return (
    <YStack flex={1} backgroundColor="$color1">
      <TopWelcome />
      <HomeTabView />
    </YStack>
  );
}
