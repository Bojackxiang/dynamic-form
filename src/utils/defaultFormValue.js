export default formFormat => {
  let defaultValue = {};
  formFormat.forEach(item => {
    switch (item.type) {
      // note: handling the multiple text case
      case "multiText":
        let multipleFields = {};
        item.fields.forEach(subItem => {
          multipleFields[subItem] = "";
        });
        defaultValue[item.id] = multipleFields;
        break;

      // note: handling the checkbox fields
      case "checkboxInput":
        let tempCheckBoxInputsFields = {};
        item.fields.forEach(subItem => {
          tempCheckBoxInputsFields[subItem] = "";
        });
        defaultValue[item.id] = tempCheckBoxInputsFields;
        break;

      // note: handling select default value
      case "select":
        defaultValue[item.id] = 0;
        break;
      default:
        defaultValue[item.id] = "";
    }
  });
  return defaultValue;
};
