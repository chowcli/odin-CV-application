import EditorSectionBase from "./EditorSectionBase";
import { AddButton } from "./ButtonComp";

function ChildElement({ handleAddBtn }) {
  return (
    <>
      <AddButton className="addRecord" handleAddBtn={handleAddBtn}>
        Add record
      </AddButton>
    </>
  );
}

function PracticalExpSect({ practicalExp, handleChange, handleAddBtn }) {
  return (
    <EditorSectionBase sectClassName="practicalExpContainer" btnTextContent="Employment history">
      <ChildElement handleAddBtn={handleAddBtn} />
    </EditorSectionBase>
  );
}

export default PracticalExpSect;
