import { Text, YStack } from 'tamagui';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@tamagui/core';

interface PeriodCountdownProps {
  daysUntilPeriod: number;
}

export function PeriodCountdown({ daysUntilPeriod }: PeriodCountdownProps) {
  const theme = useTheme();
  return (
    <YStack alignItems="center" gap="$2">
      <FontAwesome name="tint" size={32} color={theme.color1.val} />
      <Text color="$color1" fontSize={16} lineHeight={20}>
        Tới kình vào
      </Text>
      <YStack alignItems="center" gap={0}>
        <Text color="$color1" fontSize={40} fontWeight="bold" lineHeight={45}>
          {daysUntilPeriod}
        </Text>
        <Text color="$color1" fontSize={24} fontWeight="bold" lineHeight={28}>
          NGÀY
        </Text>
      </YStack>
    </YStack>
  );
}
