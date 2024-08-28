function handleChange({ event, ID = "", stateSetter }) {
  const { name, value } = event.target;

  stateSetter(draft => {
    if (ID) {
      const index = draft.findIndex(ele => ele.id === ID);
      draft[index][name] = value;
    } else {
      draft[name] = value;
    }
  });
}

export default handleChange;
