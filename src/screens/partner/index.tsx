import Ionicons from '@expo/vector-icons/Ionicons';
import { useToastController } from '@tamagui/toast';
import * as Clipboard from 'expo-clipboard';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { H1, Text, useTheme, View, YStack } from 'tamagui';
import TouchableOpacityButton from '../../components/TouchableOpacityButton';
import BackgrounEllipses from '../../components/BackgroundEllipses';

export function PartnerScreen() {
  const [code, setCode] = useState<string>('');
  const [status, setStatus] = useState<'beginning' | 'codeCreated' | 'timeout'>(
    'beginning',
  );
  const theme = useTheme();
  const toast = useToastController();

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(code);
    toast.show('Đã sao chép mã vào clipboard.', {
      customData: {
        theme: 'success',
      },
    });
  };

  const createNewInvitation = () => {
    setCode('KJMTNAK');
    setStatus('codeCreated');
  };

  const cancelInvitation = () => {
    setCode('');
    setStatus('beginning');
  };

  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      gap={'$3'}
      padding={'$3'}
      backgroundColor={'$color1'}
      position="relative"
    >
      {/* Background */}
      <BackgrounEllipses />

      {/* Header */}
      <H1
        color={'$accent12'}
        fontWeight={'bold'}
        fontSize={'$7'}
        textTransform="uppercase"
      >
        Bạn đời
      </H1>

      {/* When beginning */}
      {status === 'beginning' && (
        <>
          <Ionicons
            name="heart-circle-outline"
            size={100}
            color={theme.color12.val}
          />
          <Text fontSize={'$5'} fontWeight={'bold'}>
            Liên kết với bạn đời.
          </Text>
          <Text fontSize={'$true'} textAlign="center">
            Tạo lời mời mới để bắt đầu.
          </Text>
        </>
      )}

      {/* When code created */}
      {status === 'codeCreated' && (
        <>
          <Ionicons
            name="heart-circle-outline"
            size={100}
            color={theme.color12.val}
          />
          <Text fontSize={'$5'} fontWeight={'bold'}>
            Hãy liên kết ngay nào!
          </Text>
          <Text fontSize={'$true'} textAlign="center">
            Chia sẻ mã mời phía dưới cho người bạn đời của bạn để bắt đầu liên
            kết.
          </Text>
          <Text fontSize={'$true'} textAlign="center">
            Mã mời này chỉ có hiệu lực trong vòng 48 giờ.
          </Text>
          <TouchableOpacity onPress={copyToClipboard} style={{ width: '100%' }}>
            <View
              padding={'$3'}
              backgroundColor={'$softGray'}
              borderRadius={'$5'}
              borderWidth={1}
              borderColor={'$gray'}
              marginTop={'$5'}
            >
              <Text
                color={'$color11'}
                fontWeight={'bold'}
                fontSize={'$6'}
                textTransform="uppercase"
                textAlign="center"
              >
                {code}
              </Text>
            </View>
          </TouchableOpacity>
        </>
      )}

      {/* When time out */}
      {status === 'timeout' && (
        <>
          <Ionicons
            name="hourglass-outline"
            size={100}
            color={theme.color12.val}
          />
          <Text fontSize={'$5'} fontWeight={'bold'}>
            Mã mời của bạn đã hết hạn.
          </Text>
          <Text fontSize={'$true'} textAlign="center">
            Mã mời này chỉ có sẵn trong 48 giờ. Bạn sẽ cần tạo mã mới để được
            hợp tác.
          </Text>
          <TouchableOpacity onPress={copyToClipboard} style={{ width: '100%' }}>
            <View
              padding={'$3'}
              backgroundColor={'$softGray'}
              borderRadius={'$5'}
              borderWidth={1}
              borderColor={'$gray'}
              marginTop={'$5'}
            >
              <Text
                color={'$color11'}
                fontWeight={'bold'}
                fontSize={'$6'}
                textTransform="uppercase"
                textAlign="center"
              >
                {code}
              </Text>
            </View>
          </TouchableOpacity>
        </>
      )}

      {/* Buttons */}
      <TouchableOpacityButton
        wrapperProps={{
          onPress: createNewInvitation,
        }}
        viewProps={{
          width: 160,
          borderRadius: '$10',
          marginTop: '$5',
        }}
      >
        Tạo lời mời{status === 'codeCreated' && ' mới'}
      </TouchableOpacityButton>

      <TouchableOpacityButton
        wrapperProps={{
          onPress: cancelInvitation,
        }}
        viewProps={{
          width: 160,
          borderRadius: '$10',
          backgroundColor: 'transparent',
        }}
        textProps={{
          color: 'gray',
        }}
      >
        Huỷ lời mời
      </TouchableOpacityButton>
    </YStack>
  );
}
