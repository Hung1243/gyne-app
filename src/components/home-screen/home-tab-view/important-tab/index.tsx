import { YStack } from 'tamagui';
import PredictionSection from './PredictionSection';
import BlogSection from './BlogSection';

export default function ImportantTab() {
  return (
    <YStack>
      <PredictionSection />
      <BlogSection />
    </YStack>
  );
}
