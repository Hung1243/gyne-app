import Ionicons from '@expo/vector-icons/Ionicons';
import { Checkbox, CheckboxProps, Label, XStack } from 'tamagui';

export function CheckboxWithLabel({
  size,
  label = 'Accept terms and conditions',
  ...checkboxProps
}: CheckboxProps & { label?: string }) {
  const id = `checkbox-${(size || '').toString().slice(1)}`;
  return (
    <XStack width={300} alignItems="center" gap="$4">
      <Checkbox id={id} size={size} {...checkboxProps}>
        <Checkbox.Indicator>
          <Ionicons name="checkmark" size={20} color="white" />
        </Checkbox.Indicator>
      </Checkbox>

      <Label size={size} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
}
