import React from "react";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { PrimaryButton } from "../components/PrimaryButton";
import { MainContainer } from "../components/MainContainer";
import ReactSelect from "react-select";
import Veteran from "../constants/veteranSelectOptions";
import { Form } from "../components/Form";
import {
  Checkbox,
  InputLabel
} from "@material-ui/core";
import * as yup from "yup";

const schema = yup.object().shape({
  //TODO error message not showing
  veteranStatus: yup
    .string(),
  identify: yup
    .string(),
  comment: yup.string()
    .min(3, "Must be at least 3 characters")
})


export const Identity = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, control, errors } = useForm({
    defaultValues: {
      veteranStatus: data.veteranStatus,
      identify: data.identify,
      comments: data.comments
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    history.push("./interests");
    setValues(data);
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <section>
          <label>Veteran Status</label>
          <Controller
            as={ReactSelect}
            veteran={Veteran}
            name="VeteranStatus"
            isClearable
            control={control}
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
          <InputLabel htmlFor="additional-comments">
            Additional comments:
          </InputLabel>
          <textarea ref={register} id="comments" name="comments" rows="3" cols="50"></textarea>
        </section>
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
