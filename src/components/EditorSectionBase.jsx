import { useState } from "react";
import { ToggleButton } from "./ButtonComp";

function EditorSectionBase({ sectClassName, btnTextContent, children }) {
  const [isActive, setIsActive] = useState(false);

  const editorSectClassName = isActive ? "editorContainer active" : "editorContainer";
  const handleToggle = () => setIsActive(!isActive);

  return (
    <section className={sectClassName}>
      <ToggleButton
        isActive={isActive}
        handleToggle={handleToggle}
        className="toggleEditorContainer"
        textContent={btnTextContent}
      />

      <section className={editorSectClassName}>{children}</section>
    </section>
  );
}

export default EditorSectionBase;
