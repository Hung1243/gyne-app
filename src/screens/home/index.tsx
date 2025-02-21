import React from 'react';
import { ScrollView, XStack, YStack, ZStack } from 'tamagui';
import HomeTabView from '../../components/home-screen/home-tab-view';
import TopWelcome from '../../components/home-screen/TopWelcome';

export default function HomeScreen() {
  return (
    <ScrollView backgroundColor="$background">
      <TopWelcome />
      <HomeTabView />
    </ScrollView>
  );
}
