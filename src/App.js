import React from "react";
import FormGenerator from "./FormGenerator";

const formSubmit = e => {
  e.preventDefault();
};
function App() {
  let formArray = [
    {
      type: "text",
      label: `name`,
      placeholder: "enter name",
      required: false,
      name: "text",
      validation: "string|min:8"
    },
    {
      type: "textarea",
      label: `textarea`,
      placeholder: "textare",
      required: false,
      name: "textArea",
      validation: "string|min:8"
    },
    {
      type: "select",
      label: `select`,
      placeholder: "",
      required: false,
      name: "select",
      validation: "string|min:8",
      options: [1, 2, 3, 4]
    },
    {
      type: "selectMultiple",
      label: `select Multiple`,
      placeholder: "",
      required: false,
      name: "selectMultiple",
      validation: "string|min:8",
      options: [1, 2, 3, 4]
    },
    {
      type: "file",
      label: `file`,
      placeholder: "",
      required: false,
      name: "file",
      validation: "string|min:8"
    },
    {
      type: "email",
      label: `email`,
      placeholder: "enter email",
      required: false,
      name: "email",
      validation: "email"
    },
    {
      type: "checkbox",
      label: `checkbox`,
      required: false,
      name: "checkbox"
    },
    {
      type: "radio",
      label: `radio Button`,
      required: false,
      name: "radio"
    },
    {
      type: "radio",
      label: `radio Button`,
      required: false,
      name: "radio"
    }
  ];

  let result = [];

  const getValues = item => {
    console.log(item);
  };
  return (
    <div className="container">
      <FormGenerator formArray={formArray} getValues={getValues} />
    </div>
  );
}

export default App;
