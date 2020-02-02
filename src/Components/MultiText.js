import React from "react";
import TextInput from "./TextInput";

const MultiText = ({
  fieldName,
  id,
  fields,
  _formChangeHandler,
  formValue
}) => {
  return (
    <div>
      {fieldName}
      {fields.map(item => (
        <TextInput
          key={item}
          fieldName={item}
          id={id + "-" + item}
          _formChangeHandler={_formChangeHandler}
          formValue={formValue[item]}
        />
      ))}
    </div>
  );
};

export default MultiText;
