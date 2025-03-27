import "./InteractiveTab.scss";

export default function InteractiveTab() {
  return (
    <>
      <div className="tabs">
        <input type="radio" id="tab1" name="tab" defaultChecked />
        <label htmlFor="tab1" className="tab">
          Tab 1
        </label>

        <input type="radio" id="tab2" name="tab" />
        <label htmlFor="tab2" className="tab">
          Tab 2
        </label>

        <input type="radio" id="tab3" name="tab" />
        <label htmlFor="tab3" className="tab">
          Tab 3
        </label>
      </div>

      <div className="tab-content">
        <div className="content" id="tab1-content">
          <p>Innehåll för Tab 1</p>
        </div>
        <div className="content" id="tab2-content">
          <p>Innehåll för Tab 2</p>
        </div>
        <div className="content" id="tab3-content">
          <p>Innehåll för Tab 3</p>
        </div>
      </div>
    </>
  );
}
