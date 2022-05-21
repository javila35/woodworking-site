import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  InputContainer,
  StyledForm,
  StyledError,
  StyledInput,
  StyledLabel,
  StyledTextArea,
} from "./Form.styles";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID,
  EMAIL_TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID,
  EMAILJS_PUBLIC_ID = process.env.REACT_APP_EMAILJS_PUBLIC_ID;

export const Form = () => {
  const {
    clearErrors,
    formState: { errors },
    handleSubmit,
    setError,
    register,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    // TODO: Store keys in netlify on deploy and process.env them here
    if (SERVICE_ID && EMAIL_TEMPLATE_ID && EMAILJS_PUBLIC_ID) {
      clearErrors();
      emailjs
        .send(SERVICE_ID, EMAIL_TEMPLATE_ID, data, EMAILJS_PUBLIC_ID)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      setError("submit", {
        type: "submit",
        message:
          "There was an error submitting your request. Please try again.",
      });
    }
  });

  console.log(errors);

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
            pattern: {
              value: /^\S+@\S+\.\S+$/i,
              message: "Please enter a valid email",
            },
          })}
        />
      </InputContainer>
      <InputContainer>
        <StyledLabel>What are you looking for?</StyledLabel>
        <StyledTextArea {...register("message", { required: true })} />
      </InputContainer>
      <input type="submit" />
      {errors?.from_email && (
        <StyledError>{errors.from_email.message}</StyledError>
      )}
      {errors?.submit && <StyledError>{errors.submit.message}</StyledError>}
    </StyledForm>
  );
};
