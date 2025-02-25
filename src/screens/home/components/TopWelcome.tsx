import { XStack, YStack, Avatar, Text, XStackProps } from 'tamagui';

export default function TopWelcome(props: XStackProps) {
  return (
    <XStack gap={'$true'} padding={'$3'} {...props}>
      <YStack flex={2} gap={'$1'}>
        <Text fontWeight={'bold'} fontSize={'$9'} color={'$color9'}>
          Chào Skibidi
        </Text>
        <Text fontStyle="italic" fontSize={'$2'} color={'$color11'}>
          Nâng niu chu kỳ của bạn
        </Text>
      </YStack>
      <YStack
        flex={0}
        flexDirection="row-reverse"
        shadowOffset={{ width: 4, height: 4 }}
        shadowOpacity={0.3}
        shadowRadius={4}
        shadowColor={'$shadow1'}
      >
        <Avatar size={'$6'} borderRadius={'$5'} boxShadow={'$shadow3'}>
          <Avatar.Image
            accessibilityLabel="avatar"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            width={'100%'}
            height={'100%'}
          />
          <Avatar.Fallback backgroundColor="$color9" />
        </Avatar>
      </YStack>
    </XStack>
  );
}
