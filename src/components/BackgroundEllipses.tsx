import { View } from 'tamagui';
import PinkEllipse from '../../assets/svgs/pink-ellipse.svg';
import WhiteEllipse from '../../assets/svgs/white-ellipse.svg';

// Need it's parent to have position 'relative'
export default function BackgrounEllipses() {
  return (
    <View position="absolute" top={0} left={0}>
      <WhiteEllipse style={{ position: 'absolute', top: -290, left: 58 }} />
      <PinkEllipse style={{ position: 'absolute', top: 470, left: -150 }} />
    </View>
  );
}
