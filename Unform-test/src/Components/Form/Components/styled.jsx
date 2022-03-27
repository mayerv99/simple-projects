import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    color: red;
    font-size: 12px;
  }
`;
export const TextInput = styled.input`
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 5px;
  border: ${(props) => (props.error ? "2px solid red" : "1px solid gray")};
`;

export const Label = styled.label`
  font-size: 14px;
`;
