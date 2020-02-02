import React from 'react'

const TextInput = ({fieldName, id, _formChangeHandler, formValue}) => {
    return (
        <div>
            {fieldName}
            <input type="text" id={id} onChange={_formChangeHandler} value={formValue}/>
        </div>
    )
}

export default TextInput
