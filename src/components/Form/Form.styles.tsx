import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledError = styled.label`
  color: red;
  align-self: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const StyledInput = styled.input`
  align-self: flex-end;
  margin: auto 0 auto 0;
  width: 50%;
  height: 30%;
`;

export const StyledLabel = styled.label`
  align-self: flex-start;
  font-size: 2em;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
`;
