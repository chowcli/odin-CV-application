function InputGroupBase({ props, handleChange }) {
  const { labelFor, labelTextContent, typeAttr, nameAttr, idAttr, placeholderAttr, textarea } = props;

  return (
    <div className="inputGroup">
      <label htmlFor={labelFor}>{labelTextContent}</label>

      {textarea ? (
        <textarea name={nameAttr} id={idAttr} placeholder={placeholderAttr} spellCheck="true" onChange={handleChange} />
      ) : (
        <input type={typeAttr} name={nameAttr} id={idAttr} placeholder={placeholderAttr} onChange={handleChange} />
      )}
    </div>
  );
}

export default InputGroupBase;
