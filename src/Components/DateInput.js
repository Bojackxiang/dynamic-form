import React from "react";

const DateInput = ({ fieldName, id, type, required, limit, _formChangeHandler, formValue}) => {
  return (
    <div>
      {fieldName}
      <input type={type} id={id} onChange={_formChangeHandler} value={formValue}/>
    </div>
  );
};

export default DateInput;
