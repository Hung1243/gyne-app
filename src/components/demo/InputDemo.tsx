import { SizeTokens, XStack, Input, Button } from 'tamagui';

export function InputDemo(props: { size: SizeTokens }) {
  return (
    <XStack alignItems="center" gap="$2">
      <Input flex={1} size={props.size} placeholder={`Size ${props.size}...`} />
      <Button size={props.size}>Go</Button>
    </XStack>
  );
}
