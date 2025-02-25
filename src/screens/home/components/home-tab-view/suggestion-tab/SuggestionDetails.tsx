import { Image, Text, View } from 'tamagui';
import GyneShape1 from '../../../../../../assets/svgs/gyne-shape-1.svg';
import GyneShape2 from '../../../../../../assets/svgs/gyne-shape-2.svg';
import { Suggestion } from '../../../../../types/Suggestion';

export default function SuggestionDetails({
  suggestion,
}: {
  suggestion: Suggestion;
}) {
  return (
    <View
      shadowOffset={{ width: 4, height: 4 }}
      shadowOpacity={0.25}
      shadowRadius={4}
      shadowColor={'$shadow1'}
      position="relative"
      width={'100%'}
      height={'30%'}
    >
      {/* Pink Shape */}
      <View width={'70%'} marginTop={'$2'} marginBottom={'$5'}>
        <GyneShape1 width={'100%'} />
        <View
          position="absolute"
          width={'80%'}
          height={'68%'}
          left={10}
          bottom={50}
          gap={'$3'}
        >
          <Text fontSize={'$5'} fontWeight={'bold'}>
            {suggestion.title}
          </Text>
          <View
            backgroundColor={'$color1'}
            borderRadius={'$4'}
            flex={1}
            width={'82%'}
            padding={'$2'}
          >
            <Text fontSize={'$2'} textAlign="justify">
              {suggestion.description}
            </Text>
          </View>
        </View>
      </View>

      {/* Blue shape */}
      <View width={'50%'} position="absolute" top={150} right={0}>
        <GyneShape2 width={'110%'} />
        <View
          position="absolute"
          width={'65%'}
          left={16}
          bottom={42}
          borderWidth={'$3'}
          borderRadius={'$5'}
          borderColor={'white'}
          backgroundColor={'white'}
          aspectRatio={1}
        >
          <Image
            aspectRatio={'1'}
            borderRadius={'$5'}
            source={{
              uri: suggestion.imageUrl,
              width: 200,
              height: 300,
            }}
            width="100%"
            height="100%"
          />
        </View>
      </View>

      {/* Text details */}
      <View>
        <Text>{suggestion.details}</Text>
      </View>
    </View>
  );
}
