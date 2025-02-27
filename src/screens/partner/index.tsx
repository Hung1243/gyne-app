import { useToastController } from '@tamagui/toast';
import React from 'react';
import { Button, Text, YStack } from 'tamagui';

export function PartnerScreen() {
  const toast = useToastController();

  return (
    <YStack flex={1} justifyContent="center" alignItems="center" gap={'$2'}>
      <Text>Partner Screen</Text>
      <Button
        theme={'error'}
        onPress={() => {
          toast.show('Testing error toast', {
            message: 'This is an error toast',
            duration: 3000,
            customData: {
              theme: 'error',
            },
          });
        }}
      >
        Demo error toast
      </Button>
      <Button
        theme={'warning'}
        onPress={() => {
          toast.show('Testing warning toast', {
            message: 'This is an warning toast',
            duration: 3000,
            customData: {
              theme: 'warning',
            },
          });
        }}
      >
        Demo error toast
      </Button>
      <Button
        theme={'success'}
        onPress={() => {
          toast.show('Testing success toast', {
            message: 'This is an success toast',
            duration: 3000,
            customData: {
              theme: 'success',
            },
          });
        }}
      >
        Demo error toast
      </Button>
    </YStack>
  );
}
