import { SectionList } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { H2, useTheme } from 'tamagui';
import { GyneBoxProduct } from '../../../../../../types/GyneBoxProduct';
import { SectionType } from '../../../../../../types/SectionType';
import ProductCard from './ProductCard';

export default function ProductList({
  data,
}: {
  data: SectionType<GyneBoxProduct[]>[];
}) {
  const theme = useTheme();

  return (
    <SectionList
      style={{ padding: 12 }}
      sections={data}
      keyExtractor={(item, index) => item[0].id + index}
      renderItem={({ item }) => (
        // Item is an array
        <FlatList
          contentContainerStyle={{ gap: 12, paddingBottom: 12 }}
          data={item} // This is an array from our data
          horizontal
          keyExtractor={(subItem, index) => `item-${index}`}
          renderItem={({ item: product }) => <ProductCard product={product} />}
          showsHorizontalScrollIndicator={false}
        />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <H2 fontWeight={'bold'} fontSize={'$4'}>
          {title}
        </H2>
      )}
    ></SectionList>
  );
}
