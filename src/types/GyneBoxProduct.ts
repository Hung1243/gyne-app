export type GyneBoxProduct = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  details: string;
  brand: string;
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
