import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const FormGenerator = ({ formArray, getValues }) => {
  const handleSubmit = e => {
    e.preventDefault();
    let result = [];

    for (let index = 0; index < formArray.length; index++) {
      let element = document.getElementById(index);
      let key = document.getElementById(index).name;
      let value = document.getElementById(index).value;

      if (
        (element.type === "checkbox" && element.checked) ||
        (element.type === "radio" && element.checked)
      ) {
        value = element.value;
      } else if (
        (element.type === "checkbox" && !element.checked) ||
        (element.type === "radio" && !element.checked)
      )
        value = "";

      result.push({ [key]: value });
    }

    getValues(result);
  };

  let form = (
    <Form onSubmit={handleSubmit}>
      {formArray.map((item, index) => {
        if (
          item.type === "text" ||
          item.type === "textarea" ||
          item.type === "email"
        ) {
          return (
            <FormGroup key={index}>
              <Label for={item.name}>{item.label}</Label>
              <Input
                type={item.type}
                name={item.name}
                id={index}
                placeholder={item.placeHolder ? item.placeHolder : null}
                required={item.required}
                minLength="5"
              />
            </FormGroup>
          );
        } else if (item.type === "checkbox" || item.type === "radio") {
          return (
            <FormGroup key={index}>
              <Label>
                <Input
                  type={item.type}
                  name={item.name}
                  required={item.required}
                  id={index}
                  value="bilal"
                />
                {item.label}
              </Label>
            </FormGroup>
          );
        } else if (item.type === "select") {
          return (
            <FormGroup key={index}>
              <Label for={item.name}>{item.label}</Label>
              <Input type={item.type} name={item.name} id={index}>
                {item.options
                  ? item.options.map(i => {
                      return (
                        <React.Fragment>
                          <option>{i}</option>
                        </React.Fragment>
                      );
                    })
                  : null}
              </Input>
            </FormGroup>
          );
        } else if (item.type === "selectMultiple") {
          return (
            <FormGroup key={index}>
              <Label for={item.name}>{item.label}</Label>
              <Input type="select" name={item.name} multiple id={index}>
                {item.options
                  ? item.options.map(i => {
                      return (
                        <React.Fragment>
                          <option>{i}</option>
                        </React.Fragment>
                      );
                    })
                  : null}
              </Input>
            </FormGroup>
          );
        } else if (item.type === "file") {
          return (
            <FormGroup key={index}>
              <Label for={item.name}>{item.label}</Label>
              <Input
                type={item.type}
                name={item.name}
                required={item.required}
                id={index}
              ></Input>
              <FormText color="muted">
                This is some placeholder block-level help text for the above
                input.
              </FormText>
            </FormGroup>
          );
        }
      })}
      <Button>Submit</Button>
    </Form>
  );

  return <>{form}</>;
};

export default FormGenerator;
