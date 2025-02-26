import { Button, CardProps, Image, Text, View, YStack } from 'tamagui';
import { GyneBoxProduct } from '../../../../../../types/GyneBoxProduct';

export default function ProductCard({
  product,
  ...props
}: { product: GyneBoxProduct } & CardProps) {
  return (
    <Button
      unstyled
      width={160}
      bordered
      borderRadius={'$5'}
      padding={'$2'}
      backgroundColor={'$color3'}
      overflow="hidden"
      pressStyle={{ scale: 0.95 }}
      animation={'quick'}
      shadowOffset={{ width: 4, height: 4 }}
      shadowOpacity={0.25}
      shadowRadius={4}
      shadowColor={'$shadow1'}
      {...props}
    >
      <YStack gap={'$1'}>
        <View
          borderRadius={'$3'}
          overflow="hidden"
          width={'100%'}
          aspectRatio={1}
        >
          <Image
            width={'100%'}
            height={'100%'}
            objectFit="contain"
            alignSelf="center"
            source={{
              width: 200,
              height: 200,
              uri: product.imageUrl,
            }}
          />
        </View>
        <YStack gap={'$1'} padding={'$1'}>
          <Text fontSize={'$1'} color={'$color11'} textTransform="uppercase">
            {product.brand}
          </Text>
          <Text>{product.title}</Text>
        </YStack>
      </YStack>
    </Button>
  );
}
