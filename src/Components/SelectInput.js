import React from "react";

const SelectInput = ({ fieldName, id, required, options, _formChangeHandler, formValue }) => {

  return (
    <div>
      {fieldName}
      <select id={id} onChange={_formChangeHandler} value={formValue}>
        {options.map((item, index) => (
          <option value={index} key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
