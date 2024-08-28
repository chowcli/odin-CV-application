function FieldsetBase({ hideLegend = false, textContent, children }) {
  return (
    <fieldset className="fieldsetGroup">
      {hideLegend ? (
        <legend className="visually-hidden">{textContent}</legend>
      ) : (
        <legend>
          <h3>{textContent}</h3>
        </legend>
      )}

      {children}
    </fieldset>
  );
}

export default FieldsetBase;
