import { Card, CardProps, Image, Text } from 'tamagui';
import { Blog } from '../../../../types/Blog';

export default function BlogCard({
  title,
  url,
  imageUrl,
  ...props
}: Blog & CardProps) {
  return (
    <Card
      minHeight={160}
      borderWidth={'$3'}
      borderColor={'$accent9'}
      animation="fast"
      pressStyle={{
        scale: 0.95,
      }}
      {...props}
    >
      <Card.Footer width={'100%'}>
        <Text
          color={'$color12'}
          fontSize={'$6'}
          fontWeight={'bold'}
          top={'$2'}
          right={'$2'}
        >
          {title}
        </Text>
      </Card.Footer>
      <Card.Background>
        <Image
          objectFit="cover"
          alignSelf="center"
          // @ts-ignore
          source={{
            width: '100%',
            height: '100%',
            uri: imageUrl,
          }}
        />
      </Card.Background>
    </Card>
  );
}
