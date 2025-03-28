import { useState } from "react";
import "./Accordion.scss";

const sections = [
  {
    title: "section1",
    content: "This is the content for section 1",
    id: 0,
  },
  {
    title: "section2",
    content: "This is the content for section 2",
    id: 1,
  },
  {
    title: "section3",
    content: "This is the content for section 3",
    id: 2,
  },
  {
    title: "section4",
    content: "This is the content for section 4",
    id: 3,
  },
];

type AccordionState = boolean[];
export default function Accordion() {
  const [isOpen, setIsOpen] = useState<AccordionState>([
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (id: number) => {
    setIsOpen(() => {
      const newArray = [...isOpen];
      newArray[id] = !newArray[id];
      return newArray;
    });
  };
  return (
    <>
      <div className="accordion">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`item ${isOpen[section.id] ? "open" : ""}`}
          >
            <button onClick={() => handleClick(section.id)} className="header">
              {section.title}
            </button>
            <div className="content">{section.content}</div>
          </div>
        ))}
      </div>
    </>
  );
}
