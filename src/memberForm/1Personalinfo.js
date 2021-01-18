import React from 'react';
import { useData } from "../DataContext";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  Container,
  FormControlLabel,
  Grid,
  InputLabel,
  Link,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
  Radio,
  RadioGroup
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers";
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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const PersonalInfo = () => {
  const classes = useStyles();
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
  const onSubmit = () => {
    history.push("./identity");
    setValues(data);
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <p>Are you at least 18 years of age? (Must be over 18 to register)</p>
              <Controller
                as={
                  <RadioGroup aria-label="over18" name="over18" row>
                    <FormControlLabel
                      ref={register}
                      id="true"
                      name="true"
                      value="true" label="Yes"
                      control={<Radio />} required
                    />
                    <FormControlLabel
                      ref={register}
                      id="false"
                      name="false"
                      value="false"
                      control={<Radio />}
                      label="No" error={!!errors.over18} helperText={errors?.over18?.message}
                    />
                  </RadioGroup>
                }
                name="RadioGroup"
                control={control}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>

      </Box>
    </Container>
  );
}