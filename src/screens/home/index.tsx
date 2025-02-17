import { Button, YStack } from 'tamagui';
import { useToast } from '../../hooks/useToast';
import { CurrentToast } from '../../components/Toast';

export default function HomeScreen() {
  const toast = useToast();

  const showSuccessToast = () => {
    toast.success({
      title: 'Lưu thành công!',
      message: 'Dữ liệu của bạn đã được lưu.',
    });
  };

  const showErrorToast = () => {
    toast.error({
      title: 'Lỗi!',
      message: 'Không thể kết nối đến máy chủ.',
    });
  };

  return (
    <YStack
      flex={1}
      alignItems="center"
      justifyContent="center"
      space="$4"
      backgroundColor="$background"
    >
      <Button
        size="$4"
        backgroundColor="$primary"
        color="white"
        borderRadius="$4"
        paddingHorizontal="$6"
        pressStyle={{
          scale: 0.97,
          opacity: 0.8,
        }}
        onPress={showSuccessToast}
      >
        Toast Success
      </Button>

      <Button
        size="$4"
        backgroundColor="$primary"
        color="white"
        borderRadius="$4"
        paddingHorizontal="$6"
        pressStyle={{
          scale: 0.97,
          opacity: 0.8,
        }}
        onPress={showErrorToast}
      >
        Toast Error
      </Button>

      <CurrentToast />
    </YStack>
  );
}
