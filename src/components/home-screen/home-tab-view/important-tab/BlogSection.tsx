import { YStack, H2, Text, Button } from 'tamagui';

export default function BlogSection() {
  return (
    <YStack>
      <H2 fontWeight={'bold'} fontSize={'$4'}>
        Blog
      </H2>
      <YStack
        gap={'$3'}
        backgroundColor={'$color2'}
        borderRadius={'$6'}
        paddingHorizontal={'$3'}
        paddingVertical={'$4'}
        alignItems="center"
        shadowOffset={{ width: 4, height: 4 }}
        shadowOpacity={0.25}
        shadowRadius={4}
        shadowColor={'$shadow1'}
      >
        <Text fontSize={'$5'} color={'$accent12'} fontWeight={'bold'}>
          Tới kinh vào
        </Text>
        <Text color="$color12" fontWeight={'bold'} fontSize={'$8'}>
          10 Ngày
        </Text>
        <Text color={'$accent11'}>Dự đoán: hôm nay khả năng có thai cao!</Text>
        <Button
          backgroundColor={'$color1'}
          borderRadius={'$10'}
          size={'$2'}
          color={'$accent11'}
        >
          Đánh dấu kỳ kinh
        </Button>
      </YStack>

      <Text
        fontSize={'$1'}
        color={'$color11'}
        alignSelf="center"
        paddingTop={'$2'}
      >
        Lưu ý: Dự đoán không thay thế cho việc ngừa thai
      </Text>
    </YStack>
  );
}
