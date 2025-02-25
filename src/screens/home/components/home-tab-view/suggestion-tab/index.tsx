import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import { ScrollView, Text, View, YStack } from 'tamagui';
import { lightGrays } from '../../../../../theme/themes';
import { Suggestion } from '../../../../../types/Suggestion';
import { suggestionsData } from '../../../../../constants/mockdata';
import SuggestionDetails from './SuggestionDetails';

const width = Dimensions.get('window').width;

export default function SuggestionTab() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const [suggestions, setSuggestions] = useState<Suggestion[]>(suggestionsData);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <YStack flex={1} position="relative">
      <View flex={1}>
        <Carousel
          ref={ref}
          width={width}
          data={suggestions}
          onProgressChange={progress}
          renderItem={({ item, index }) => (
            <ScrollView padding={'$3'}>
              <SuggestionDetails suggestion={item} />
            </ScrollView>
          )}
        />
      </View>
      <View position="absolute" left={0} right={0} bottom={'$4'}>
        <Pagination.Basic
          progress={progress}
          data={suggestions}
          activeDotStyle={{
            backgroundColor: lightGrays.gray,
            borderRadius: 50,
          }}
          dotStyle={{ backgroundColor: lightGrays.softGray, borderRadius: 50 }}
          containerStyle={{ gap: 5, marginTop: 10 }}
          onPress={onPressPagination}
        />
      </View>
    </YStack>
  );
}
