import React from "react";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { PrimaryButton } from "../components/PrimaryButton";
import { MainContainer } from "../components/MainContainer";
import { Form } from "../components/Form";
import {
  Checkbox,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";
import * as yup from "yup";
import "./Step2.css";

const schema = yup.object().shape({
  //TODO error message not showing
  veteranStatus: yup
    .string()
    .required("Please select")
})

export const Step2 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, control, errors } = useForm({
    defaultValues: {
      veteran: { value: "", label: "" }
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    history.push("./step3");
    setValues(data);
  };


  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <InputLabel htmlFor="veteranStatus-select">
            Veteran Status
          </InputLabel>
          <Controller
            control={control}
            name="veteranStatus"
            as={
              <Select id="veteranStatus" name="veteranStatus" error={!!errors.veteranStatus} helperText={errors?.veteranStatus?.message} ref={register} required>
                <MenuItem value={0}>Yes - you are a veteran of the U.S. Armed Forces</MenuItem>
                <MenuItem value={6}>No - you are not a veteran of the U.S. Armed Forces</MenuItem>
                <MenuItem value={11}>I am a military spouse</MenuItem>
              </Select>
            }
          />
        </section>
        <section>
          <h5>I identify as (check all you are comfortable with)</h5>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            A woman
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            A Man
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            A woman
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            Non-binary
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            LGBTQIA+
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            Black or African American
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            Indigenous
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            A person of color
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            Hispanic
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            Latinx
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            Asian / Pacific Islander
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            Middle Eastern
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            White / Caucasian
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            An immigrant
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            Multiracial
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            A parent
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            Disabled
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            Other
          </InputLabel>
        </section>
        <section>
          <InputLabel htmlFor="additional-comments" >
            Additional Comments:
          </InputLabel>
          <textarea ref={register} id="comments" name="comments" rows="3" cols="50" placeholder="comments here"></textarea>
        </section>
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
