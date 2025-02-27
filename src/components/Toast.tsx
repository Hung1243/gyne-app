import { FontAwesome5 } from '@expo/vector-icons';
import { Toast, useToastState } from '@tamagui/toast';
import { XStack, YStack } from 'tamagui';

const TOAST_STYLES = {
  success: {
    iconColor: '#2E7D32',
    iconName: 'check-circle',
  },
  error: {
    iconColor: '#C62828',
    iconName: 'times-circle',
  },
  warning: {
    iconColor: '#EF6C00',
    iconName: 'exclamation-circle',
  },
};

export const CurrentToast = () => {
  const currentToast = useToastState();

  if (!currentToast || currentToast.isHandledNatively) return null;

  const theme =
    (currentToast.customData?.theme as keyof typeof TOAST_STYLES) || 'success';
  const { iconColor, iconName } = TOAST_STYLES[theme];

  return (
    <Toast
      key={currentToast.id}
      duration={currentToast.duration}
      enterStyle={{ opacity: 0, scale: 0.95, y: -10 }}
      exitStyle={{ opacity: 0, scale: 1, y: -8 }}
      animation="quick"
      backgroundColor={'$color2'}
      borderRadius={'$6'}
      paddingHorizontal={'$4'}
      paddingVertical={'$3'}
      borderWidth={1}
      borderColor={'$color7'}
      width={300}
      alignSelf="center"
      shadowOffset={{ width: 4, height: 4 }}
      shadowOpacity={0.1}
      shadowRadius={4}
      shadowColor={'$shadow1'}
      theme={theme}
    >
      <XStack gap="$2" alignItems="center">
        <FontAwesome5
          name={iconName}
          size={18}
          color={iconColor}
          style={{ marginRight: 4 }}
        />
        <YStack flex={1}>
          <Toast.Title
            color={'$color12'}
            fontWeight="600"
            fontSize={14}
            lineHeight={18}
          >
            {currentToast.title}
          </Toast.Title>
          {currentToast.message && (
            <Toast.Description
              color={'$color11'}
              fontSize={13}
              lineHeight={16}
              opacity={0.9}
            >
              {currentToast.message}
            </Toast.Description>
          )}
        </YStack>
      </XStack>
    </Toast>
  );
};
