import EditorSectionBase from "./EditorSectionBase";
import FieldsetBase from "./FieldsetBase";
import InputGroupBase from "./InputGroupBase";
import handleChange from "./handleChange";

const personalDetails = [
  {
    labelFor: "fullName",
    labelTextContent: "Full name",
    typeAttr: "text",
    nameAttr: "fullName",
    idAttr: "fullName",
    placeholderAttr: "",
    textarea: false,
  },
  {
    labelFor: "career",
    labelTextContent: "Career",
    typeAttr: "text",
    nameAttr: "career",
    idAttr: "career",
    placeholderAttr: "Software developer",
    textarea: false,
  },
];

const contact = [
  {
    labelFor: "email",
    labelTextContent: "Email",
    typeAttr: "text",
    nameAttr: "email",
    idAttr: "email",
    placeholderAttr: "abc@example.com",
    textarea: false,
  },
  {
    labelFor: "phone",
    labelTextContent: "Phone",
    typeAttr: "text",
    nameAttr: "phone",
    idAttr: "phone",
    placeholderAttr: "+1 222 333 4444",
    textarea: false,
  },
  {
    labelFor: "address",
    labelTextContent: "Address",
    typeAttr: "text",
    nameAttr: "address",
    idAttr: "address",
    placeholderAttr: "102 3rd St NY, Florida, USA, 33035",
    textarea: false,
  },
];

const summary = {
  labelFor: "summary",
  labelTextContent: "Summary",
  typeAttr: "",
  nameAttr: "summary",
  idAttr: "summary",
  placeholderAttr: "Software Engineer with a strong foundation in object-oriented ...",
  textarea: true,
};

function EditorContainer({ stateSetter }) {
  return (
    <>
      <FieldsetBase hideLegend textContent="Personal details">
        {personalDetails.map((obj, index) => (
          <InputGroupBase key={index} props={obj} handleChange={event => handleChange({ event, stateSetter })} />
        ))}
      </FieldsetBase>

      <FieldsetBase textContent="Contact">
        {contact.map((obj, index) => (
          <InputGroupBase key={index} props={obj} handleChange={event => handleChange({ event, stateSetter })} />
        ))}
      </FieldsetBase>

      <FieldsetBase textContent="Summary">
        <InputGroupBase props={summary} handleChange={event => handleChange({ event, stateSetter })} />
      </FieldsetBase>
    </>
  );
}

function PersonalInfoSect({ stateSetter }) {
  return (
    <EditorSectionBase sectClassName="personalInfoContainer" btnTextContent="Personal details">
      <EditorContainer stateSetter={stateSetter} />
    </EditorSectionBase>
  );
}

export default PersonalInfoSect;
