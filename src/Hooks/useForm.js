import { useState, useEffect } from "react";
import defaultFormValue from "../utils/defaultFormValue";
import defaultCheckbox from "../utils/defaultCheckbox";
import formValidator from "../utils/formValidator";

export default formFormat => {
  // note: initial all the default values basing on the form format
  let [formValues, setFormValues] = useState(defaultFormValue(formFormat));

  // note: errors 
  let [errors, setErrors] = useState({})

  // note: get all check box value
  let [checkboxStatus, setCheckBoxStatus] = useState(
    defaultCheckbox(formFormat)
  );

  // note: isSubmitted 
  let [isSubmit, setIsSubmit] = useState(false)

  // note: this useEffect is used as debuged
  useEffect(() => {
    console.log(checkboxStatus);
  }, [checkboxStatus]);

  useEffect(() => {
    console.log(errors);
    // todo: submit the data here 
  }, [errors])

  // note: handling the form change
  const _formChangeHandler = event => {
    switch (event.target.type) {
      // note: check box type
      case "checkbox":
        setCheckBoxStatus({...checkboxStatus, [event.target.id]: event.target.checked})
        break;

      // note: handling the select input
      case "select-one":
        setFormValues({
          ...formValues,
          [event.target.id]: parseInt(event.target.value)
        });
        break;

      // note: solve text input, date,
      default:
        if (event.target.id.indexOf("-") > 0) {
          // note: this is an embed element
          let tempMultipleFormValue = formValues[event.target.id.split("-")[0]];
          tempMultipleFormValue[event.target.id.split("-")[1]] =
            event.target.value;
          setFormValues({
            ...formValues,
            [event.target.id.split("-")[0]]: tempMultipleFormValue
          });
        } else {
          setFormValues({
            ...formValues,
            [event.target.id]: event.target.value
          });
        }
        break;
    }
  };

  // note: handling the form submit
  const _formSubmitHandler = event => {
    event.preventDefault();
    setIsSubmit(true)
    let updatedErrors = formValidator(formValues, checkboxStatus)
    setErrors(updatedErrors)
  };

  // note: return the function and default value to the components
  return { _formChangeHandler, _formSubmitHandler, formValues, checkboxStatus, errors };
};
