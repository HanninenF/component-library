export default function SearchBar() {
  return (
    <>
      <label htmlFor="">
        <input type="text" />
      </label>
      <input name="filterToggle" type="checkbox" />
      <label htmlFor="filterToggle">only show products in stock</label>
    </>
  );
}
