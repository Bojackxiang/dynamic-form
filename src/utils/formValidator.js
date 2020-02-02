import { formFormat } from "../Forms/formTemplate";

const requiredValueChecker = value => {
  return value.length > 0;
};

const ageChecker = dob => {
  const nowDate = new Date();
  const birth = new Date(dob).getTime();
  return (nowDate - birth) / (1000 * 60 * 60 * 24 * 365) > 18;
};

export default (formValues, checkboxStatus) => {
  console.log(formFormat);
  console.log(formValues);
  let errors = {};

  formFormat.forEach(item => {
    if (!item.fields) {
      if (item.required && item.type === "text") {
        if (!requiredValueChecker(formValues[item.id])) errors[item.id] = false;
      }

      if (item.required && item.type === "date") {
        if (!ageChecker(formValues[item.id])) errors[item.id] = false;
      }
    } else {
      if (item.id.indexOf(Object.keys(checkboxStatus)) > -1 && checkboxStatus[item.id] === true) {
        // * 如果是true就要检查fields里面有没有填写好
        const firstClass = item.id;
        let tempErr = {}
        item.fields.map(fieldItem => {
            console.log(fieldItem, requiredValueChecker(formValues[firstClass][fieldItem]));
            if (requiredValueChecker(formValues[firstClass][fieldItem]) === false){
                tempErr[fieldItem] = false
            };
        });
        errors[item.id] = tempErr
      }
    }
  });

  return errors;
};
