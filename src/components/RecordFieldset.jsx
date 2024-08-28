import { useState } from "react";
import { ToggleButton } from "./ButtonComp";

function RecordFieldset(record, handleChange) {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => setIsActive(!isActive);

  const btnTextContent = `${record.jobTitle}, ${record.company}`;
  const hideClassName = isActive ? "fieldsetGroup active" : "fieldsetGroup";

  return (
    <div key={record.id} className="recordFieldset">
      <ToggleButton isActive={isActive} handleToggle={handleToggle} className="toggleFieldset">
        {btnTextContent}
      </ToggleButton>

      <fieldset className={hideClassName}>
        <legend className="visually-hidden">{btnTextContent}</legend>

        <div className="inputGroup">
          <label htmlFor="jobTitle">Job title</label>
          <input type="text" name="jobTitle" id="jobTitle" onChange={handleChange}/>
        </div>
      </fieldset>
    </div>
  );
}

export default RecordFieldset;
