import { useState } from 'react';
import { Text, YStack } from 'tamagui';
import { GyneBoxProduct } from '../../../../../types/GyneBoxProduct';
import { SectionType } from '../../../../../types/SectionType';
import ProductList from './components/ProductList';
import { gyneProductsData } from '../../../../../constants/mockdata';

export default function GyneBoxTab() {
  const [productList, setProductList] = useState<
    SectionType<GyneBoxProduct[]>[] | null
  >(gyneProductsData);

  return (
    <YStack flex={1}>
      {productList ? <ProductList data={productList} /> : <Text>Loading</Text>}
    </YStack>
  );
}
