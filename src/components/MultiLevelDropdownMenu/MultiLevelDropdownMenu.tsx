import "./MultiLevelDropdownMenu.scss";
export default function MultiLevelDropdownMenu() {
  return (
    <nav className="dropdownMenu">
      <ul>
        <li>
          <a href="#">Menyalternativ 1</a>
        </li>
        <li className="subMenu">
          <a href="#">Menyalternativ 2</a>
          <ul>
            <li>
              <a href="#">Undermeny 1</a>
            </li>
            <li>
              <a href="#">Undermeny 2</a>
            </li>
          </ul>
        </li>
        <li className="menu3">
          <a href="#">Menyalternativ 3</a>
        </li>
      </ul>
    </nav>
  );
}
