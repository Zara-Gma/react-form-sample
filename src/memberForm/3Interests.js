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
  Checkbox, InputLabel
} from "@material-ui/core";
import * as yup from "yup";

const schema = yup.object().shape({

})

export const Interests = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { handleSubmit, control, register } = useForm({
    defaultValues: {
      interests: data.interests,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    history.push("./codeofconduct");
    setValues(data);
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <h5>What are your pronouns?</h5>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control} defaultValue=""
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            She/her
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control} defaultValue=""
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            He/him
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control} defaultValue=""
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            They/them
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control} defaultValue=""
          />
          <InputLabel htmlFor="identify-checkbox" className="checkbox">
            I prefer not to say
          </InputLabel>
          <Input
            ref={register}
            id="pronoun"
            type="text"
            label="Let me type"
            placeholder="My pronoun is..."
            name="pronoun"
          />
        </section>
        <section>
          <h5>Interests</h5>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control} defaultValue=""
          />
          <InputLabel htmlFor="interests-checkbox" className="checkbox">
            Volunteering (general)
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control} defaultValue=""
          />
          <InputLabel htmlFor="interests-checkbox" className="checkbox">
            Advocacy
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control} defaultValue=""
          />
          <InputLabel htmlFor="interests-checkbox" className="checkbox">
            Career Coaching
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control} defaultValue=""
          />
          <InputLabel htmlFor="interests-checkbox" className="checkbox">
            Skill building/Training
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control} defaultValue=""
          />
          <InputLabel htmlFor="interests-checkbox" className="checkbox">
            Events
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control} defaultValue=""
          />
          <InputLabel htmlFor="interests-checkbox" className="checkbox">
            Community Service
          </InputLabel>
          <Controller
            as={Checkbox}
            name="Checkbox"
            type="checkbox"
            control={control} defaultValue=""
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
