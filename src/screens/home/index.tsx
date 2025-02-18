import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import {
  Button,
  Form,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  ScrollView,
  Separator,
  SizableText,
  Spinner,
  Text,
  TextArea,
  Theme,
  XGroup,
  XStack,
  YStack,
} from 'tamagui';
import { CheckboxWithLabel } from '../../components/demo/CheckboxWithLabel';
import { InputDemo } from '../../components/demo/InputDemo';
import { CurrentToast } from '../../components/Toast';
import { useToast } from '../../hooks/useToast';

export default function HomeScreen() {
  const [status, setStatus] = React.useState<
    'off' | 'submitting' | 'submitted'
  >('off');

  React.useEffect(() => {
    if (status === 'submitting') {
      const timer = setTimeout(() => setStatus('off'), 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  const toast = useToast();

  const showSuccessToast = () => {
    toast.success({
      title: 'Lưu thành công!',
      message: 'Dữ liệu của bạn đã được lưu.',
    });
  };

  const showErrorToast = () => {
    toast.error({
      title: 'Lỗi!',
      message: 'Không thể kết nối đến máy chủ.',
    });
  };

  return (
    <ScrollView backgroundColor="$background" padding="$1">
      <YStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        gap="$4"
        backgroundColor="$background"
      >
        <Button
          size="$4"
          backgroundColor="$backgroundPress"
          color="white"
          borderRadius="$4"
          paddingHorizontal="$6"
          pressStyle={{
            scale: 0.97,
            opacity: 0.8,
          }}
          onPress={showSuccessToast}
        >
          Toast Success
        </Button>

        <Button
          size="$4"
          borderRadius="$4"
          paddingHorizontal="$6"
          pressStyle={{
            scale: 0.97,
            opacity: 0.8,
          }}
          onPress={showErrorToast}
        >
          Toast Error
        </Button>

        <CurrentToast />
      </YStack>

      <YStack
        gap="$1"
        backgroundColor="$background"
        // media query
        $gtSm={{
          flexDirection: 'column',
          flexWrap: 'nowrap',
        }}
      >
        <H1 color={'$color4'}>Heading 1</H1>
        <H2 color={'$color10'}>Heading 2</H2>
        <H3 color={'$color12'}>Heading 3</H3>
        <H4 color={'$accent4'}>Heading 4</H4>
        <H5 color={'$accent10'}>Heading 5</H5>
        <H6 color={'$accent12'}>Heading 6</H6>
        <H1 color={'$accentBackground'}>Heading 1</H1>
      </YStack>

      <Separator marginVertical={16} />

      <YStack gap="$2" alignItems="center">
        <SizableText size="$3">SizableText</SizableText>
        <XStack>
          <SizableText theme="light" size="$3">
            alt1
          </SizableText>
          <SizableText theme="accent" size="$3">
            alt2
          </SizableText>
        </XStack>
        <Paragraph size="$2" fontWeight="800">
          Paragraph
        </Paragraph>
      </YStack>

      <Separator marginVertical={16} />

      <YStack padding="$3" gap="$3">
        <Button>Plain</Button>
        <Button
          alignSelf="center"
          icon={<Ionicons name="at-circle" />}
          size="$6"
        >
          Large
        </Button>
        <XStack gap="$2" justifyContent="center">
          <Button size="$3">Active</Button>
          <Button size="$3" variant="outlined">
            Outlined
          </Button>
        </XStack>
        <XStack gap="$2">
          <Button themeInverse size="$3">
            Inverse
          </Button>
          <Button iconAfter={<Ionicons name="at-circle" />} size="$3">
            iconAfter
          </Button>
        </XStack>
        <XGroup>
          <XGroup.Item>
            <Button width="50%" size="$2" disabled opacity={0.5}>
              disabled
            </Button>
          </XGroup.Item>

          <XGroup.Item>
            <Button width="50%" size="$2" chromeless>
              chromeless
            </Button>
          </XGroup.Item>
        </XGroup>
      </YStack>

      <Separator marginVertical={16} />

      <YStack gap="$2">
        <CheckboxWithLabel size="$2" />
        <CheckboxWithLabel size="$4" defaultChecked />
        <CheckboxWithLabel size="$5" disabled label="Accept terms (disabled)" />
      </YStack>

      <Theme name={'accent'}>
        <Separator marginVertical={16} />
        <Button>Button 3</Button>
        <Text>Text with accent theme</Text>
        <Text color={'$accent11'}>Subtle Text with accent theme</Text>
        <Separator marginVertical={16} />
      </Theme>

      <Form
        alignItems="center"
        minWidth={300}
        gap="$2"
        onSubmit={() => setStatus('submitting')}
        borderWidth={1}
        borderRadius="$4"
        backgroundColor="$background"
        borderColor="$borderColor"
        padding="$8"
      >
        <H4>{status[0].toUpperCase() + status.slice(1)}</H4>

        <Form.Trigger asChild disabled={status !== 'off'}>
          <Button
            icon={status === 'submitting' ? () => <Spinner /> : undefined}
          >
            Submit
          </Button>
        </Form.Trigger>

        <YStack
          width={200}
          minHeight={250}
          overflow="hidden"
          gap="$2"
          margin="$3"
          padding="$2"
        >
          <InputDemo size="$2" />
          <Theme inverse>
            <InputDemo size="$3" />
          </Theme>
          <Theme name="dark_accent">
            <InputDemo size="$4" />
          </Theme>

          <TextArea placeholder="Enter your details 2..." />
        </YStack>
      </Form>
    </ScrollView>
  );
}
