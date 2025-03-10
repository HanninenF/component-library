import { useEffect, useRef, useState } from "react";
import "./DropdownMenu.scss";

export const DropdownMenu = () => {
  const [foldOut, setFoldOut] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleFoldOut = () => {
    setFoldOut((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFoldOut(false);
      }
    };

    if (foldOut) {
      document.addEventListener("click", handleClickOutside);
    }
    console.log("foldOut", foldOut);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [foldOut]);

  return (
    <>
      <div className="dropdown__container" ref={dropdownRef}>
        <div className={`${foldOut ? "options" : "invisible"}`}>
          <div className="foldOut">
            <button>All</button>
            <button>Movies</button>
          </div>
        </div>

        <button className="foldOutButton" onClick={handleFoldOut}>
          v
        </button>
      </div>
    </>
  );
};
