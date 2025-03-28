import "./SearchInputWithAnimation.scss";

export default function SearchInputWithAnimation() {
  return (
    <div className="search">
      <label htmlFor="">
        <input className="searchInput" type="text" placeholder="search" />
      </label>
    </div>
  );
}
