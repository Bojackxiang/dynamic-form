import React from "react";
import TextInput from "./TextInput";
import DateInput from "./DateInput";
import SelectInput from "./SelectInput";
import MultiText from "./MultiText";
import CheckBoxInput from "./CheckboxInput";
import useForm from "../Hooks/useForm";

const inputGenerator = (
  item,
  _formChangeHandler,
  formValues,
  checkboxStatus,
  errors
) => {
  switch (item.type) {
    // note: general text input
    case "text":
      return (
        <div key={item.key}>
          <TextInput
            fieldName={item.fieldName}
            id={item.id}
            type={item.type}
            _formChangeHandler={_formChangeHandler}
            formValue={formValues[item.id]}
          />
        </div>
      );
    // note: date input
    case "date":
      return (
        <div key={item.key}>
          <DateInput
            fieldName={item.fieldName}
            id={item.id}
            type={item.type}
            required={item.required}
            limit={item.limit}
            _formChangeHandler={_formChangeHandler}
            formValue={formValues[item.id]}
          />
        </div>
      );
    // note:  select input
    case "select":
      return (
        <div key={item.key}>
          <SelectInput
            fieldName={item.fieldName}
            id={item.id}
            required={item.required}
            options={item.options}
            _formChangeHandler={_formChangeHandler}
            formValue={formValues[item.id]}
          />
        </div>
      );

    // note: multi text input
    case "multiText":
      return (
        <div key={item.key}>
          <MultiText
            fieldName={item.fieldName}
            id={item.id}
            fields={item.fields}
            _formChangeHandler={_formChangeHandler}
            formValue={formValues[item.id]}
          />
        </div>
      );

    // note: check box input
    case "checkboxInput":
      return (
        <div key={item.key}>
          <CheckBoxInput
            fieldName={item.fieldName}
            id={item.id}
            key={item.key}
            fields={item.fields}
            _formChangeHandler={_formChangeHandler}
            checkboxStatus={checkboxStatus[item.id]}
            formValue={formValues[item.id]}
          />
        </div>
      );
    default:
      return;
  }
};

const Form = ({ formFormat }) => {
  const {
    _formChangeHandler,
    _formSubmitHandler,
    formValues,
    checkboxStatus,
    errors
  } = useForm(formFormat);

  // note: form generator
  const formGenerator = jsonForm => {
    return (
      <form onSubmit={_formSubmitHandler}>
        {formFormat.map(item => {
          return inputGenerator(
            item,
            _formChangeHandler,
            formValues,
            checkboxStatus,
            formValues
          );
        })}
        <input type="submit" value="submit" />
      </form>
    );
  };

  const errorDisplay = (error) => {
    console.log('error handle');
    if (Object.keys(error).length > 0){
      Object.keys(error).forEach(key => {
        console.log(typeof(error[key]));
        if (typeof(error[key]) === 'object'){
          console.log(key);
        }else{
          console.log(key);
        }
      })
    }
    

  }

  // note: return components
  return (
    <div>
      <div>{errorDisplay(errors)}</div>
      {formGenerator(formFormat)}
    </div>
  );
};

export default Form;
