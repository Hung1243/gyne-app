import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, H2, View, XStack, YStack } from 'tamagui';
import { HomeStackParamList } from '../../../../navigation/types';
import { lightAccentPalette } from '../../../../theme/themes';
import BlogCard from './BlogCard';
import { useState } from 'react';
import { Blog } from '../../../../types/Blog';
import { blogs as blogsData } from '../../../../constants/mockdata';

const DISPLAYED_BLOG_COUNT = 5;
const CARD_HEIGHTS = [180, 240, 160, 160, 180];

export default function BlogSection() {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
  const [blogs, setBlogs] = useState<Blog[]>(blogsData);

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
                height={CARD_HEIGHTS[index]}
                key={blog.id}
                {...blog}
                onPress={() => navigation.navigate('Blog', { id: blog.id })}
              />
            ) : null,
          )}
        </YStack>
        <YStack flex={1} gap={'$4'}>
          {blogs.map((blog, index) =>
            index % 2 !== 0 ? (
              <BlogCard
                height={CARD_HEIGHTS[index]}
                key={blog.id}
                {...blog}
                onPress={() => navigation.navigate('Blog', { id: blog.id })}
              />
            ) : null,
          )}
          <View flex={1} justifyContent="center">
            <Button
              fontWeight={'bold'}
              borderWidth={'$0'}
              backgroundColor={'transparent'}
              color={'$accent11'}
              animation={'fast'}
              pressStyle={{
                scale: 0.9,
              }}
              variant="outlined"
              iconAfter={
                <Ionicons name="arrow-forward" color={lightAccentPalette[10]} />
              }
              onPress={() => navigation.navigate('BlogList')}
            >
              Xem thêm
            </Button>
          </View>
        </YStack>
      </XStack>
    </YStack>
  );
}
