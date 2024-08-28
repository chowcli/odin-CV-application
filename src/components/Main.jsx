import { useImmer } from "use-immer";
import { initialPersonalInfo, initialPracticalExp, initialEduExp, initialSkills } from "./initialStateStructure";
import ProfileEditor from "./ProfileEditor";

function Main() {
  const [personalInfo, setPersonalInfo] = useImmer(initialPersonalInfo);
  const [practicalExp, setPracticalExp] = useImmer(initialPracticalExp);
  const [eduExp, setEduExp] = useImmer(initialEduExp);
  const [skills, setSkills] = useImmer(initialSkills);

  const props = {
    setPersonalInfo,
    setPracticalExp,
    setEduExp,
    setSkills,
    practicalExp,
    eduExp,
    skills,
  };

  return <ProfileEditor {...props} />;
}

export default Main;
