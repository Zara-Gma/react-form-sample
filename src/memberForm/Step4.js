import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers";
import { useData } from "../DataContext";
import * as yup from "yup";

const schema = yup.object().shape({
veteranStatus: yup
        // .bool()
        // .required('Please indicate your communications preference')
})

export const Step4 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      veteranStatus: data.veteranStatus
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push("./Result.js");
    setValues(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Veteran Status</h2>

      <label htmlFor="veteranStatus">Veteran Status</label>
      <select name="SecondPage" id="" ref={register}>
        <option value="none">-None-</option>
        <option value="Yes - you are a veteran of the U.S. Armed Forces<">
          Yes - you are a veteran of the U.S. Armed Forces
        </option>
        <option value="No - you are not a veteran of the U.S. Armed Forces">
          No - you are not a veteran of the U.S. Armed Forces
        </option>
        <option value="I am a military spouse">I am a military spouse</option>
      </select>
      <label>Additional Comments:</label>
      <textarea name="Additional Comments:" ref={register} />

      <input
        style={{ display: "block", marginTop: 20 }}
        type="reset"
        value="Reset field Values"
      />
      <button>Next</button>
    </form>
  );
};
