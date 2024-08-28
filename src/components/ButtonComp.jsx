function ToggleButton({ isActive, handleToggle, className, textContent }) {
  const btnClassName = isActive ? `${className} toggle-btn active` : `${className} toggle-btn`;

  return (
    <button type="button" className={btnClassName} onClick={handleToggle}>
      {textContent}
      {isActive ? <i className="bx bx-caret-down" /> : <i className="bx bx-caret-up" />}
    </button>
  );
}

function AddButton({ className, handleAddBtn, textContent }) {
  const btnClassName = `${className} add-btn`;

  return (
    <button type="button" className={btnClassName} onClick={handleAddBtn}>
      <i className="bx bx-plus" />
      {textContent}
    </button>
  );
}

function EditButton() {}
function SaveButton() {}

export { ToggleButton, AddButton, EditButton, SaveButton };
