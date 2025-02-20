import { H2, XStack, YStack } from 'tamagui';
import BlogCard from './BlogCard';
import { getRandomValue } from '../../../../utils/randomUtils';

export type Blog = {
  title: string;
  url: string;
  imageUrl: string;
};

const blogs: Blog[] = [
  {
    title: 'Sex Life',
    url: 'asd',
    imageUrl:
      'https://img.freepik.com/free-vector/flat-design-doodle-dynamic-background_23-2149322640.jpg?semt=ais_hybrid',
  },
  {
    title: 'Gaming',
    url: 'asd2',
    imageUrl:
      'https://img.freepik.com/free-vector/flat-design-doodle-dynamic-background_23-2149322640.jpg?semt=ais_hybrid',
  },
  {
    title: 'Going out',
    url: 'asd3',
    imageUrl:
      'https://img.freepik.com/free-vector/flat-design-doodle-dynamic-background_23-2149322640.jpg?semt=ais_hybrid',
  },
  {
    title: 'Super man',
    url: 'asd4',
    imageUrl:
      'https://img.freepik.com/free-vector/flat-design-doodle-dynamic-background_23-2149322640.jpg?semt=ais_hybrid',
  },
  {
    title: 'Eating burger',
    url: 'asd5',
    imageUrl:
      'https://img.freepik.com/free-vector/flat-design-doodle-dynamic-background_23-2149322640.jpg?semt=ais_hybrid',
  },
  {
    title: 'Punching bag',
    url: 'asd6',
    imageUrl:
      'https://img.freepik.com/free-vector/flat-design-doodle-dynamic-background_23-2149322640.jpg?semt=ais_hybrid',
  },
];

const cardHeights = [160, 180, 230];

export default function BlogSection() {
  return (
    <YStack>
      <H2 fontWeight={'bold'} fontSize={'$4'}>
        Blog
      </H2>
      <XStack
        gap={'$4'}
        borderRadius={'$6'}
        alignItems="flex-start"
        shadowOffset={{ width: 4, height: 4 }}
        shadowOpacity={0.25}
        shadowRadius={4}
        shadowColor={'$shadow1'}
      >
        <YStack flex={1} gap={'$4'}>
          {blogs.map((blog, index) =>
            index % 2 === 0 ? (
              <BlogCard
                height={getRandomValue(cardHeights)}
                key={blog.url}
                {...blog}
              />
            ) : null,
          )}
        </YStack>
        <YStack flex={1} gap={'$4'}>
          {blogs.map((blog, index) =>
            index % 2 !== 0 ? (
              <BlogCard
                height={getRandomValue(cardHeights)}
                key={blog.url}
                {...blog}
              />
            ) : null,
          )}
        </YStack>
      </XStack>
    </YStack>
  );
}
