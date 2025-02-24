import { Text, YStack, XStack, Theme } from 'tamagui';
import { FontAwesome } from '@expo/vector-icons';

interface CycleHistoryProps {
  label: string;
  progress: number;
  startDate: string;
}

export function CycleHistory({
  label,
  progress,
  startDate,
}: CycleHistoryProps) {
  return (
    <Theme name="light">
      <XStack
        padding="$4"
        backgroundColor="$color1"
        borderRadius={12}
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <YStack flex={1} gap="$2">
          <Text fontSize={16} fontWeight="bold" color="$color12">
            {label}
          </Text>
          <Text fontSize={14} color="$color10">
            Bắt đầu vào: {startDate}
          </Text>
          <CycleProgressBar progress={progress} />
        </YStack>
        <FontAwesome name="angle-right" size={14} color="$color4" />
      </XStack>
    </Theme>
  );
}

function CycleProgressBar({ progress }: { progress: number }) {
  const totalDots = 30;
  const filledDots = Math.round(progress * totalDots);

  return (
    <XStack
      marginTop="$2"
      gap="$1"
      flexWrap="nowrap"
      justifyContent="flex-start"
    >
      {[...Array(totalDots)].map((_, index) => (
        <YStack
          key={index}
          width={8}
          height={8}
          borderRadius={4}
          backgroundColor={
            index < filledDots
              ? '$accent6'
              : index < filledDots + 5
                ? '$color4'
                : '$color3'
          }
        />
      ))}
    </XStack>
  );
}
