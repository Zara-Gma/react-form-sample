import React from "react";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { PrimaryButton } from "../components/PrimaryButton";
import { MainContainer } from "../components/MainContainer";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import {
  Select, InputLabel, MenuItem
} from "@material-ui/core";
import * as yup from "yup";

//TODO update to library
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  //TODO error message not showing
  over18: yup
    .string()
    .required("Please select your experience level"),
  experienceLevel: yup
    .string(),
  firstName: yup
    .string().required("First name is a required field")
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .min(3, "Name must be at least 3 characters"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field")
    .min(3, "Name must be at least 3 characters"),
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  // TODO update to library version
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, "to short")
    .max(10, "to long"),
  //TODO add address
})


export const Step1 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, control, errors } = useForm({
    defaultValues: {
      over18: data.over18,
      experienceLevel: data.experienceLevel,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    history.push("./step2");
    setValues(data);
  };


  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <InputLabel htmlFor="over18-select">
            Are you at least 18 years of age? (Must be over 18 to register)
          </InputLabel>
          <Controller
            control={control}
            name="over18"
            as={
              <Select id="over18" name="over18" error={!!errors.over18} helperText={errors?.over18?.message} ref={register} required>
                <MenuItem value={0}>Yes</MenuItem>
                <MenuItem value={6}>No</MenuItem>
              </Select>
            }
          />
        </section>
        <InputLabel htmlFor="experienceLevel-select">
          Experience Level
          </InputLabel>
        <Controller
          control={control}
          name="experienceLevel"
          as={
            <Select id="experienceLevel" name="experienceLevel" error={!!errors.experienceLevel} helperText={errors?.experienceLevel?.message} ref={register}>
              <MenuItem value={0}>0-5 years</MenuItem>
              <MenuItem value={6}>6-10 years</MenuItem>
              <MenuItem value={11}>11-15 years</MenuItem>
              <MenuItem value={16}>16 +years</MenuItem>
            </Select>
          }
        />
        <Input
          ref={register}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          ref={register}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <Input
          ref={register}
          id="email"
          type="email"
          label="Email"
          name="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          required
        />
        <Input
          ref={register}
          id="phoneNumber"
          type="tel"
          label="Phone Number"
          name="phoneNumber"
          error={!!errors.phoneNumber}
          helperText={errors?.phoneNumber?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
}
