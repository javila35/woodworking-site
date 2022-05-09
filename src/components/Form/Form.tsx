import { useForm } from "react-hook-form";

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

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <StyledForm onSubmit={onSubmit}>
      <InputContainer>
        <StyledLabel>Name: </StyledLabel>
        <StyledInput
          type="text"
          placeholder="Name"
          {...register("Name", { required: true })}
        />
      </InputContainer>
      <StyledLabel>Email: </StyledLabel>
      <StyledInput
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+\.\S+$/i })}
      />
      <InputContainer>
        <StyledLabel>What are you looking for?</StyledLabel>
        <StyledTextArea {...register("info", { required: true })} />
      </InputContainer>
      <input type="submit" />
    </StyledForm>
  );
};
