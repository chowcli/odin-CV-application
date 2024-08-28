import PersonalInfoSect from "./PersonalInfoSect";

function ProfileEditor(props) {
  const { setPersonalInfo, setPracticalExp, setEduExp, setSkills, practicalExp, eduExp, skills } = props;

  return (
    <section id="profileEditorContainer">
      <PersonalInfoSect stateSetter={setPersonalInfo} />
    </section>
  );
}

export default ProfileEditor;
