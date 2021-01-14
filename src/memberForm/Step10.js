// Multiselect dropdown 
import React from "react";
import { useHistory } from "react-router-dom";
import { Form } from "../components/Form";
import {
  Grid
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { Multiselect } from 'multiselect-react-dropdown';
import options from "../constants/veteranSelectOptions";
import { yupResolver } from "@hookform/resolvers";

import * as yup from "yup";

const schema = yup.object().shape({
  selAutoV: yup.array().required("Multi Select Validation Field required")
});

export const Step10 = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const { handleSubmit, register, errors } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ padding: "10px" }}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Multiselect
              options={options}
              isObject={false}
            />
            <Grid item xs={6}>
            </Grid>
          </Grid>
        </Form>
      </div>
    </div>
  );
}

