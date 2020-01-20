import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const FormGenerator = ({ formArray, getValues }) => {
  let result = {};
  const handleSubmit = e => {
    e.preventDefault();
    getValues(result);
  };

  const handleChange = e => {
    if (e.target.name === "selectMultiple") {
      result = {
        ...result,
        [e.target.name]: [...e.target.options]
          .filter(({ selected }) => selected)
          .map(({ value }) => value)
      };
    } else result = { ...result, [e.target.name]: e.target.value };
  };
  let form = (
    <Form onSubmit={handleSubmit}>
      {formArray.map(({ label, validation, ...rest }, index) => {
        if (
          rest.type === "text" ||
          rest.type === "textarea" ||
          rest.type === "email" ||
          rest.type === "checkbox" ||
          rest.type === "radio" ||
          rest.type === "file"
        ) {
          return (
            <FormGroup key={index}>
              <Label for={rest.name}>{label}</Label>
              <Input
                {...rest}
                {...validation}
                onChange={e => handleChange(e)}
              />
            </FormGroup>
          );
        } else if (rest.type === "select" && rest.multiple === false) {
          let { options } = rest;
          return (
            <FormGroup key={index}>
              <Label for={rest.name}>{label}</Label>
              <Input {...rest} id={index} onChange={e => handleChange(e)}>
                {options
                  ? options.map(i => {
                      return (
                        <>
                          <option value={i.value}>{i.option}</option>
                        </>
                      );
                    })
                  : null}
              </Input>
            </FormGroup>
          );
        } else if (rest.type === "select" && rest.multiple === true) {
          let { options } = rest;

          return (
            <FormGroup key={index}>
              <Label for={rest.name}>{label}</Label>
              <Input
                {...rest}
                multiple
                id={index}
                onChange={e => handleChange(e)}
              >
                {options
                  ? options.map(i => {
                      return (
                        <>
                          <option value={i.value}>{i.option}</option>
                        </>
                      );
                    })
                  : null}
              </Input>
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
