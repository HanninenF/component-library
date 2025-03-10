import { nanoid } from "nanoid";
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";

export type ProductType = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
  id: string;
};

/* 1 FilterableProductTable (grey) contains the entire app.
2 SearchBar (blue) receives the user input.
3 ProductTable (lavender) displays and filters the list according to the user input.
4 ProductCategoryRow (green) displays a heading for each category.
5 ProductRow (yellow) displays a row for each product. */

export default function App3() {
  const PRODUCTS: ProductType[] = [
    {
      category: "Fruits",
      price: "$1",
      stocked: true,
      name: "Apple",
      id: nanoid(),
    },
    {
      category: "Fruits",
      price: "$1",
      stocked: true,
      name: "Dragonfruit",
      id: nanoid(),
    },
    {
      category: "Fruits",
      price: "$2",
      stocked: false,
      name: "Passionfruit",
      id: nanoid(),
    },
    {
      category: "Vegetables",
      price: "$2",
      stocked: true,
      name: "Spinach",
      id: nanoid(),
    },
    {
      category: "Vegetables",
      price: "$4",
      stocked: false,
      name: "Pumpkin",
      id: nanoid(),
    },
    {
      category: "Vegetables",
      price: "$1",
      stocked: true,
      name: "Peas",
      id: nanoid(),
    },
    {
      category: "Vegetables",
      price: "$1000",
      stocked: false,
      name: "Cucumber",
      id: nanoid(),
    },
  ];
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}
