import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledLabel = styled.label`
  align-self: flex-start;
  font-size: 2em;
`;

export const StyledInput = styled.input`
  align-self: flex-end;
  margin: auto 0 auto 0;
  width: 50%;
  height: 30%;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
`;
