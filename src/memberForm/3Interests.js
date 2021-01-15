import React from "react";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { PrimaryButton } from "../components/PrimaryButton";
import { MainContainer } from "../components/MainContainer";
import { Form } from "../components/Form";
import {
  Checkbox, InputLabel
} from "@material-ui/core";
import * as yup from "yup";

const schema = yup.object().shape({
  //TODO error message not showing
})

export const Interests = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      interests: data.interests,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    history.push("./codeofconduct");
    setValues(data);
  };


  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <h5>Interests</h5>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="interests-checkbox" className="checkbox">
            Volunteering (general)
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="interests-checkbox" className="checkbox">
            Advocacy
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="interests-checkbox" className="checkbox">
            Career Coaching
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="interests-checkbox" className="checkbox">
            Skill building/Training
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="interests-checkbox" className="checkbox">
            Events
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="interests-checkbox" className="checkbox">
            Community Service
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control}
          />
          <InputLabel htmlFor="interests-checkbox" className="checkbox">
            Volunteering with Cyberdei
          </InputLabel>
        </section>
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
