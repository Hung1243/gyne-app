import dayjs from 'dayjs';
import { Text, View, ViewProps } from 'tamagui';

export default function CalendarStrip(props: ViewProps) {
  const today = dayjs();
  const pastDates = [-3, -2, -1].map((offset) => today.add(offset, 'day')); // 3 past days
  const futureDates = [1, 2, 3].map((offset) => today.add(offset, 'day')); // 3 future days

  return (
    <View
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      gap={'$3'}
      padding={'$2'}
      {...props}
    >
      {/* Left: Dotted Past Dates */}
      <View flexDirection="row" gap={'$2'}>
        {pastDates.map((date) => (
          <View
            key={date.format('DD')}
            width={'$1'}
            height={'$1'}
            borderStyle="dashed"
            borderWidth={1}
            borderColor={'$color12'}
            borderRadius={'$10'}
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize={'$1'} color={'$color12'}>
              {date.format('DD')}
            </Text>
          </View>
        ))}
      </View>

      {/* Center: Current Date */}
      <View alignItems="center">
        <Text fontSize={'$2'} color={'$color12'}>
          {today.format('MMMM')}
        </Text>
        <Text fontSize={'$2'} color={'$color12'}>
          {today.format('DD')}
        </Text>
      </View>

      {/* Right: Future Dates */}
      <View flexDirection="row" gap={'$2'}>
        {futureDates.map((date) => (
          <View
            key={date.format('DD')}
            width={'$1'}
            height={'$1'}
            borderStyle="solid"
            borderWidth={1}
            borderColor={'$color12'}
            borderRadius={'$10'}
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize={'$1'} color={'$color12'}>
              {date.format('DD')}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
