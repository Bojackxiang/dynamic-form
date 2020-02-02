import React from "react";
import TextInput from "./TextInput";

const CheckBoxInput = ({
  fieldName,
  id,
  fields,
  _formChangeHandler,
  checkboxStatus,
  formValue
}) => {
  return (
    <div>
      {fieldName}
      <input
        type="checkbox"
        id={id}
        onChange={_formChangeHandler}
      />
      {fields.map(item => (
        <TextInput
          key={item}
          fieldName={item}
          id={`${id}-${item}`}
          _formChangeHandler={_formChangeHandler}
          formValue={formValue[item]}
        />
      ))}
    </div>
  );
};

export default CheckBoxInput;
