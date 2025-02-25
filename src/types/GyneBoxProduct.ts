export type GyneBoxProduct = {
  id: string;
  title: string;
};

export type GyneBoxProductCategory = {
  id: string;
  title: string;
  products: GyneBoxProduct[];
};

export type GyneBoxProductList = {
  id: string;
  categories: GyneBoxProductCategory[];
};
