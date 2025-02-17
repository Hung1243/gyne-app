import { Toast, useToastState } from '@tamagui/toast';
import { XStack, YStack } from 'tamagui';
import { FontAwesome5 } from '@expo/vector-icons';

const TOAST_STYLES = {
  success: {
    backgroundColor: '#E8F5E9',
    iconColor: '#2E7D32',
    borderColor: '#A5D6A7',
    textColor: '#1B5E20',
    iconName: 'check-circle',
  },
  error: {
    backgroundColor: '#FFEBEE',
    iconColor: '#C62828',
    borderColor: '#FFCDD2',
    textColor: '#B71C1C',
    iconName: 'times-circle',
  },
  warning: {
    backgroundColor: '#FFF3E0',
    iconColor: '#EF6C00',
    borderColor: '#FFCC80',
    textColor: '#E65100',
    iconName: 'exclamation-circle',
  },
  info: {
    backgroundColor: '#E3F2FD',
    iconColor: '#1565C0',
    borderColor: '#90CAF9',
    textColor: '#0D47A1',
    iconName: 'info-circle',
  },
};

export const CurrentToast = () => {
  const currentToast = useToastState();
  if (!currentToast || currentToast.isHandledNatively) return null;

  const type =
    (currentToast.customData?.type as keyof typeof TOAST_STYLES) || 'success';
  const { backgroundColor, iconColor, borderColor, textColor, iconName } =
    TOAST_STYLES[type];

  return (
    <Toast
      key={currentToast.id}
      duration={currentToast.duration}
      enterStyle={{ opacity: 0, scale: 0.95, y: -10 }}
      exitStyle={{ opacity: 0, scale: 1, y: -8 }}
      y={0}
      opacity={1}
      scale={1}
      animation="quick"
      viewportName={currentToast.viewportName}
      backgroundColor={backgroundColor}
      borderRadius={24}
      paddingHorizontal={16}
      paddingVertical={12}
      borderWidth={1}
      borderColor={borderColor}
      width={300}
      alignSelf="center"
      shadowColor="rgba(0,0,0,0.05)"
      shadowOffset={{ width: 0, height: 2 }}
      shadowRadius={8}
    >
      <XStack space="$2" alignItems="center">
        <FontAwesome5
          name={iconName}
          size={18}
          color={iconColor}
          style={{ marginRight: 4 }}
        />
        <YStack flex={1}>
          <Toast.Title
            color={textColor}
            fontWeight="600"
            fontSize={14}
            lineHeight={18}
          >
            {currentToast.title}
          </Toast.Title>
          {currentToast.message && (
            <Toast.Description
              color={textColor}
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
