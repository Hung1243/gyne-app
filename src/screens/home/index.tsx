import React from 'react';
import { YStack } from 'tamagui';
import HomeTabView from '../../components/home-screen/home-tab-view';
import TopWelcome from '../../components/home-screen/TopWelcome';

export default function HomeScreen() {
  return (
    <YStack flex={1} backgroundColor="$color1" paddingVertical={90}>
      <TopWelcome />
      <HomeTabView />
    </YStack>
  );
}
