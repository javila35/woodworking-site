import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import {
  InputContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextArea,
} from "./Form.styles";

export const Form = () => {
  const {
    register,
    handleSubmit,
    // TODO: Add error labels
    // formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    // TODO: Store keys in netlify on deploy and process.env them here
    // emailjs
    //   .send("serviceID", "templateID", data, "publicKey")
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  });

  return (
    <StyledForm onSubmit={onSubmit}>
      <InputContainer>
        <StyledLabel>Name: </StyledLabel>
        <StyledInput
          type="text"
          placeholder="Name"
          {...register("from_name", { required: true })}
        />
      </InputContainer>
      <InputContainer>
        <StyledLabel>Email: </StyledLabel>
        <StyledInput
          type="text"
          placeholder="Email"
          {...register("from_email", {
            required: true,
            pattern: /^\S+@\S+\.\S+$/i,
          })}
        />
      </InputContainer>
      <InputContainer>
        <StyledLabel>What are you looking for?</StyledLabel>
        <StyledTextArea {...register("message", { required: true })} />
      </InputContainer>
      <input type="submit" />
    </StyledForm>
  );
};
