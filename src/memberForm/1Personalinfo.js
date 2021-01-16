import React from "react";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { useForm, Controller } from "react-hook-form";
import { PrimaryButton } from "../components/PrimaryButton";
import { yupResolver } from "@hookform/resolvers";
import { MainContainer } from "../components/MainContainer";
// import { Form } from "../components/Form";
import Form from 'react-bootstrap/Form'
import { Input } from "../components/Input";
import { Row, Col, Button } from 'react-bootstrap';
import {
  Select, InputLabel, MenuItem, RadioGroup, Radio, FormControlLabel
} from "@material-ui/core";
// import { Row, Col, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"
import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  over18: yup
    .boolean()
    .oneOf([true], "Must be 18 or older to register"),
  experienceLevel: yup
    .string(),
  firstName: yup
    .string().required("First name is a required field")
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .min(2, "Name must be at least 2 characters"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, "to short")
    .max(10, "to long"),
})

export const PersonalInfo = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, control, errors } = useForm({
    defaultValues: {
      // over18: data.over18,
      // experienceLevel: data.experienceLevel,
      // firstName: data.firstName,
      // lastName: data.lastName,
      // email: data.email,
      // phoneNumber: data.phoneNumber
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    console.log(onSubmit);
    history.push("./identity");
    setValues(data);
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* UPDATE HERE */}


        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              ref={register}
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First name"
              error={!!errors.firstName}
              helperText={errors?.firstName?.message}
            />
            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              ref={register}
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last name"
              error={!!errors.lastName}
              helperText={errors?.lastName?.message}
            />
            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
          </Form.Group>
        </Form.Row>
        <Button>Next</Button>

        {/* UPDATE HERE */}
      </Form >
    </MainContainer >
  );
}
