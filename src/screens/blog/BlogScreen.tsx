import { RouteProp, useRoute } from '@react-navigation/native';
import { H1, ScrollView, Text, View } from 'tamagui';
import { HomeStackParamList } from '../../navigation/types';
import { useState } from 'react';
import { blogs } from '../../constants/mockdata';
import { Blog } from '../../types/Blog';
import RenderHTML from '@builder.io/react-native-render-html';
import { lightPalette } from '../../theme/themes';

export default function BlogScreen() {
  const route = useRoute<RouteProp<HomeStackParamList, 'Blog'>>();
  const { id } = route.params;
  const [blog, setBlog] = useState<Blog | undefined>(
    blogs.find((blog) => blog.id === id),
  );

  if (!blog)
    return (
      <View>
        <Text> No Blog</Text>
      </View>
    );

  return (
    <ScrollView backgroundColor="$background" padding={'$3'}>
      <H1
        fontSize={'$5'}
        fontWeight={'bold'}
        color={'$accent12'}
        shadowOffset={{ width: 3, height: 3 }}
        shadowOpacity={0.25}
        shadowRadius={4}
        shadowColor={'$shadow1'}
      >
        {blog.title}
      </H1>
      <RenderHTML
        baseStyle={{ color: lightPalette[11] }}
        contentWidth={200}
        source={{ html: blog.content }}
      />
    </ScrollView>
  );
}
