import { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Text, TextProps, View, ViewProps } from 'tamagui';

export default function TouchableOpacityButton({
  viewProps,
  textProps,
  wrapperProps,
  children,
}: {
  viewProps?: ViewProps;
  textProps?: TextProps;
  wrapperProps: TouchableOpacityProps;
  children: ReactNode;
}) {
  return (
    <TouchableOpacity onPress={wrapperProps.onPress}>
      <View
        borderRadius={'$5'}
        backgroundColor={'$color3'}
        paddingVertical={'$3'}
        paddingHorizontal={'$5'}
        {...viewProps}
      >
        <Text fontWeight={'bold'} textAlign="center" {...textProps}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
