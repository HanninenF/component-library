import { useState } from "react";
import "./Chip.scss";

type ChipProps = {
  chips: string[];
};

const Chip = ({ chips }: ChipProps) => {
  const [chipList, setChipList] = useState(chips);

  const handleDeleteChip = (chipToDelete: string) => {
    setChipList(chipList.filter((chip) => chip !== chipToDelete));
  };

  return (
    <div>
      {chipList.map((chip) => (
        <div className="chip" key={chip}>
          <span className="chip-text">{chip}</span>
          <button className="chip-close" onClick={() => handleDeleteChip(chip)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Chip;
