import { Calendar } from 'react-native-calendars';
import {
  Button,
  Text,
  YStack,
  XStack,
  ScrollView,
  Theme,
  useTheme,
} from 'tamagui';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { PeriodCountdown } from './components/PeriodCountdown';
import mockData from './mockData.json';
import { CycleHistory } from './components/CycleHistory';

export function CalendarScreen() {
  const theme = useTheme();
  const markedDates = mockData.markedDates;

  return (
    <Theme name="light">
      <ScrollView backgroundColor="$color2" padding="$4" paddingVertical={100}>
        <YStack flex={1} backgroundColor="$color2" gap="$6">
          {/* Calendar and Period Countdown Container */}
          <XStack
            backgroundColor="$color8"
            borderRadius={24}
            overflow="hidden"
            shadowColor="$shadowColor"
            shadowOffset={{ width: 0, height: 4 }}
            shadowOpacity={0.15}
            shadowRadius={8}
            padding="$2"
            height={300}
          >
            {/* Left Column - Period Countdown */}
            <YStack
              flex={3}
              justifyContent="center"
              alignItems="center"
              padding="$2"
              borderRightWidth={1}
              borderColor="$color4"
            >
              <PeriodCountdown daysUntilPeriod={3} />
            </YStack>

            {/* Right Column - Calendar */}
            <YStack flex={7}>
              <Calendar
                style={[
                  styles.calendar,
                  {
                    height: '100%',
                    backgroundColor: theme.color8.val,
                  },
                ]}
                theme={{
                  calendarBackground: theme.color8.val,
                  // selectedDayBackgroundColor: theme.accent5.val,
                  selectedDayTextColor: theme.color10.val,
                  todayTextColor: theme.color1.val,
                  dayTextColor: theme.color1.val,
                  textDisabledColor: theme.color4.val,
                  textMonthFontSize: 20,
                  textDayFontSize: 16,
                  textDayHeaderFontSize: 14,
                  'stylesheet.calendar.header': {
                    week: {
                      marginTop: 0,
                      marginBottom: 0,
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    },
                    monthText: {
                      height: 0,
                      opacity: 0,
                    },
                    header: {
                      height: 0,
                      opacity: 0,
                    },
                  },
                }}
                markedDates={markedDates}
                current={'2025-02-14'}
                hideExtraDays={true}
              />
            </YStack>
          </XStack>

          {/* Period Info Section */}
          <YStack gap="$4" alignItems="center">
            <Text color="$color10" fontSize={18} fontWeight="bold">
              Tới kình vào
            </Text>
            <Text color="$color10" fontSize={30} fontWeight="bold">
              3 NGÀY
            </Text>
            <Text color="$color10" fontSize={18}>
              Khả năng mang thai thấp
            </Text>

            <Button backgroundColor="$color10" borderRadius={32}>
              <Text color="$color1" fontSize={16} fontWeight="bold">
                Ghi chú
              </Text>
            </Button>
          </YStack>

          {/* Cycle Progress Bars */}
          <YStack gap="$4" padding="$2">
            <XStack
              marginTop="$4"
              alignItems="center"
              justifyContent="space-between"
              backgroundColor="white"
              paddingHorizontal="$4"
              paddingVertical="$2"
              borderRadius={12}
            >
              <Text color="#4A4A4A" fontSize={14} fontWeight="bold">
                Lịch sử chu kỳ kinh nguyệt của tôi
              </Text>
              <Button backgroundColor="transparent" padding={0}>
                <XStack alignItems="center" gap="$2">
                  <Text color="#999999" fontSize={14}>
                    Xem tất cả
                  </Text>
                  <FontAwesome name="angle-right" size={14} color="#999999" />
                </XStack>
              </Button>
            </XStack>
            <CycleHistory
              label="Chu kỳ kinh nguyệt hiện tại: 26 ngày"
              progress={0.7}
              startDate="17/10"
            />
            <CycleHistory
              label="Chu kỳ kinh nguyệt hiện tại: 30 ngày"
              progress={0.5}
              startDate="17/10"
            />
            <CycleHistory
              label="Chu kỳ kinh nguyệt hiện tại: 33 ngày"
              progress={0.3}
              startDate="17/10"
            />
          </YStack>
        </YStack>
      </ScrollView>
    </Theme>
  );
}

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: '#FF99CC',
    borderRadius: 0,
  },
});
