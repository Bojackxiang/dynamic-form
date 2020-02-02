export const formFormat = [
  {
    fieldName: "first name",
    id: "firstName",
    key: "firstname",
    type: "text",
    required: true
  },
  {
    fieldName: "last name",
    id: "lastName",
    key: "lastName",
    type: "text",
    required: true
  },
  {
    fieldName: "date of birth",
    id: "dob",
    key: "dob",
    type: "date",
    required: true,
    limit: 18
  },
  {
    fieldName: "gender",
    id: "gender",
    key: "gender",
    type: "select",
    required: false,
    options: ["male", "female"]
  },
  {
    fieldName: "contact number",
    id: "contact",
    key: "contact",
    type: "multiText",
    fields: ["mobile", "home"],
    required: false
  },
  {
    fieldName: "require guardian consent",
    id: "guardian",
    key: "guardian",
    type: "checkboxInput",
    required: false,
    fields: ['name', 'contact']
  }
];
