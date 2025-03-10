import React from "react";
import { ProductType } from "../../App3";
import SearchBar from "../SearchBar/SearchBar";
import { groupProductsByCategory } from "../../utils/groupProductsByCategory/groupProductsByCategory";

type ProductRowProps = {
  product: ProductType;
};

function ProductRow({ product }: ProductRowProps) {
  return (
    <>
      {product.stocked ? (
        <tr className="inStock">
          <td>{product.name}</td>
          <td> {product.price} </td>
          <td>(In stock)</td>
        </tr>
      ) : (
        <tr className="notInStock">
          <td>{product.name}</td>
          <td> {product.price} </td>
          <td>(Not in stock)</td>
        </tr>
      )}
    </>
  );
}

type ProductCategoryRowProps = {
  category: string;
};

function ProductCategoryRow({ category }: ProductCategoryRowProps) {
  return (
    <tr>
      <th colSpan={3}> {category} </th>
    </tr>
  );
}

type ProductTableProps = {
  products: ProductType[];
};

type GroupedProductsType = {
  showCategory: string;
  product: string;
};

function ProductTable({ products }: ProductTableProps) {
  const groupedProducts = groupProductsByCategory(products);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {groupedProducts.map(({ showCategory, product }) => (
          <React.Fragment key={product.id}>
            {showCategory && <ProductCategoryRow category={product.category} />}
            <ProductRow product={product} />
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

type FilterableProductTableProps = {
  products: ProductType[];
};

const FilterableProductTable = ({ products }: FilterableProductTableProps) => {
  return (
    <>
      <SearchBar />
      <ProductTable products={products} />
    </>
  );
};
export default FilterableProductTable;
