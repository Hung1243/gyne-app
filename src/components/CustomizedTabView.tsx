import { ReactElement, useState } from 'react';
import {
  AnimatePresence,
  StackProps,
  styled,
  TabLayout,
  Tabs,
  TabsTabProps,
  Text,
  View,
  YStack,
} from 'tamagui';

export type TabList = {
  key: string;
  label: string;
  content: ReactElement;
}[];

const AnimatedYStack = styled(YStack, {
  flex: 1,
  opacity: 1,
  animation: 'fast',
  variants: {
    // 1 = right, 0 = nowhere, -1 = left
    direction: {
      ':number': (direction) => ({
        enterStyle: {
          x: direction > 0 ? -25 : 25,
          opacity: 0,
        },
        exitStyle: {
          zIndex: 0,
          x: direction < 0 ? -25 : 25,
          opacity: 0,
        },
      }),
    },
  } as const,
});

const TabsRovingIndicator = ({
  active,
  ...props
}: { active?: boolean } & StackProps) => {
  return (
    <YStack
      position="absolute"
      backgroundColor="$color9"
      opacity={1}
      animation="quick"
      {...props}
    />
  );
};

export default function CustomizedTabView({ tabList }: { tabList: TabList }) {
  const [tabState, setTabState] = useState<{
    currentTab: string;
    /**
     * Layout of the Tab user might intend to select (hovering / focusing)
     */
    intentAt: TabLayout | null;
    /**
     * Layout of the Tab user selected
     */
    activeAt: TabLayout | null;
    /**
     * Used to get the direction of activation for animating the active indicator
     */
    prevActiveAt: TabLayout | null;
  }>({
    activeAt: null,
    currentTab: tabList[0].key,
    intentAt: null,
    prevActiveAt: null,
  });

  const setCurrentTab = (currentTab: string) =>
    setTabState({ ...tabState, currentTab });
  const setIntentIndicator = (intentAt: TabLayout | null) =>
    setTabState({ ...tabState, intentAt });
  const setActiveIndicator = (activeAt: TabLayout | null) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt });
  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState;

  // 1 = right, 0 = nowhere, -1 = left
  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0;
    }
    return activeAt.x > prevActiveAt.x ? -1 : 1;
  })();

  const handleOnInteraction: TabsTabProps['onInteraction'] = (type, layout) => {
    if (type === 'select') {
      setActiveIndicator(layout);
    } else {
      setIntentIndicator(layout);
    }
  };

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      orientation="horizontal"
      flexDirection="column"
      backgroundColor="transparent"
      position="relative"
      marginTop={'$3'}
    >
      {/* Tab List */}
      <YStack position="relative">
        {intentAt && (
          <TabsRovingIndicator
            borderRadius="$4"
            width={intentAt.width}
            height={intentAt.height}
            x={intentAt.x}
            y={intentAt.y}
          />
        )}
        {activeAt && (
          <TabsRovingIndicator
            borderRadius="$4"
            width={activeAt.width}
            height={activeAt.height}
            x={activeAt.x}
            y={activeAt.y}
            zIndex={1}
          />
        )}

        {/* Bar Background */}
        <View
          backgroundColor={'white'}
          width={'100%'}
          height={36}
          position="absolute"
          top={'50%'}
          transform={'translateY(-18%)'}
        ></View>

        <Tabs.List
          disablePassBorderRadius
          loop={false}
          aria-label="Home tab selection"
          gap="$3"
          unstyled
          zIndex={5}
          paddingHorizontal={'$3'}
        >
          {tabList.map(({ key, label }) => (
            <Tabs.Tab
              flex={1}
              paddingVertical="$3"
              paddingHorizontal="$2"
              value={key}
              onInteraction={handleOnInteraction}
              active={false}
              unstyled
              key={key}
            >
              <Text fontWeight={'bold'} textAlign="center">
                {label}
              </Text>
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </YStack>

      {/* Tab content */}
      <AnimatePresence exitBeforeEnter custom={{ direction }} initial={true}>
        <AnimatedYStack key={currentTab} padding={'$3'}>
          <Tabs.Content
            value={currentTab}
            forceMount
            flex={1}
            justifyContent="center"
          >
            {tabList.find((obj) => obj.key === currentTab)?.content}
          </Tabs.Content>
        </AnimatedYStack>
      </AnimatePresence>
    </Tabs>
  );
}
