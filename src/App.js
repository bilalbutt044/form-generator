import React from "react";
import FormGenerator from "./FormGenerator";

function App() {
  let formArray = [
    {
      type: "text",
      label: `name`,
      placeholder: "enter name",
      required: false,
      name: "text",
      validation: {
        minLength: 2,
        maxLength: 5,
        pattern: "^[a-z]+$"
      }
    },
    {
      type: "textarea",
      label: `textarea`,
      placeholder: "textare",
      required: false,
      name: "textArea",
      validation: {
        minLength: 2,
        maxLength: 5,
        pattern: "^[a-z]+$"
      }
    },
    {
      type: "select",
      multiple: false,
      label: `select`,
      required: false,
      name: "select",
      options: [
        {
          option: 1,
          value: "option1"
        },
        {
          option: 2,
          value: "option2"
        },
        {
          option: 3,
          value: "option3"
        },
        {
          option: 4,
          value: "option4"
        }
      ]
    },
    {
      type: "select",
      multiple: true,
      label: `select Multiple`,
      required: false,
      name: "selectMultiple",
      options: [
        {
          option: 1,
          value: "option1"
        },
        {
          option: 2,
          value: "option2"
        },
        {
          option: 3,
          value: "option3"
        },
        {
          option: 4,
          value: "option4"
        }
      ]
    },
    {
      type: "file",
      label: `file`,
      required: false,
      name: "file"
    },
    {
      type: "email",
      label: `email`,
      placeholder: "enter email",
      required: false,
      name: "email",
      validation: {
        pattern: /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
      }
    },
    {
      type: "checkbox",
      label: `checkbox`,
      required: false,
      name: "checkbox",
      value: "checkbox value"
    },
    {
      type: "radio",
      label: `radio Button`,
      required: false,
      name: "radio",
      value: "radio1"
    },
    {
      type: "radio",
      label: `radio Button`,
      required: false,
      name: "radio",
      value: "radio2"
    }
  ];

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
