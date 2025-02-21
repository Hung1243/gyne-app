import { Text, View } from 'tamagui';
import CustomizedTabView, { TabList } from '../../CustomizedTabView';
import ImportantTab from './important-tab';

const tabList: TabList = [
  { key: 'important', label: 'Quan trọng', content: <ImportantTab /> },
  {
    key: 'tips',
    label: 'Gợi ý',
    content: (
      <View>
        <Text>Goi y</Text>
      </View>
    ),
  },
  {
    key: 'gyneBox',
    label: 'Gyne Box',
    content: (
      <View>
        <Text>Gyne box</Text>
      </View>
    ),
  },
];

export default function HomeTabView() {
  return <CustomizedTabView tabList={tabList} />;
}
