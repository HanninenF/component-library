import "./ButtonWithDifferentStates.scss";
export default function ButtonWithDifferentStates() {
  return (
    <>
      <button className="btn primary">Primary</button>
      <button className="btn secondary">Secondary</button>
      <button className="btn primary" disabled>
        Disabled Primary
      </button>
    </>
  );
}
