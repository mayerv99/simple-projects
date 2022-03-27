import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { TextInput, Label, InputWrapper } from "./styled";

function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <TextInput error={error} ref={inputRef} {...rest} />
      <span>{error}</span>
    </InputWrapper>
  );
}
export default Input;
