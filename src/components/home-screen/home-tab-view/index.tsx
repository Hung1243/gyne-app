import { ViewProps } from 'tamagui';
import CustomizedTabView, { TabList } from '../../CustomizedTabView';
import GyneBoxTab from './gynebox-tab';
import ImportantTab from './important-tab';
import SuggestionTab from './suggestion-tab';

const tabList: TabList = [
  { key: 'important', label: 'Quan trọng', content: <ImportantTab /> },
  { key: 'suggestion', label: 'Gợi ý', content: <SuggestionTab /> },
  { key: 'gyneBox', label: 'Gyne Box', content: <GyneBoxTab /> },
];

export default function HomeTabView(props: ViewProps) {
  return <CustomizedTabView tabList={tabList} />;
}
