import { ProductType } from "../../App3";

type GroupedProductsType = {
  showCategory: boolean;
  product: ProductType;
};

export const groupProductsByCategory = (
  products: ProductType[]
): GroupedProductsType[] => {
  let lastCategory: string = "";
  const groupedProducts: GroupedProductsType[] = products.map((product) => {
    const showCategory: boolean = product.category !== lastCategory;
    lastCategory = product.category;
    return { showCategory: showCategory, product };
  });

  return groupedProducts;
};
