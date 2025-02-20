import CustomizedTabView, { TabList } from '../../CustomizedTabView';
import ImportantTab from './important-tab';

const tabList: TabList = [
  { key: 'important', label: 'Quan trọng', content: <ImportantTab /> },
  { key: 'tips', label: 'Gợi ý', content: <ImportantTab /> },
  { key: 'gyneBox', label: 'Gyne Box', content: <ImportantTab /> },
];

export default function HomeTabView() {
  return <CustomizedTabView tabList={tabList} />;
}
