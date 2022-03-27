import React, { useRef } from "react";
import { Form } from "@unform/web";
import { Container, Button } from "./styled";
import * as Yup from "yup";
import Input from "./Components/input";
import { Scope } from "@unform/core";

function UserForm() {
  const formRef = useRef(null);

  const schema = Yup.object().shape({
    userName: Yup.string().required("O nome é obrigatório"),
    email: Yup.string()
      .email("Insira um email válido")
      .required("O email é obrigatório"),
    address: Yup.object().shape({
      country: Yup.string().required("O país é obrigatório"),
      state: Yup.string()
        .required("O estado é obrigatório")
        .max(2, "Máximo de 2 caracteres"),
      city: Yup.string().required("A cidade é obrigatória"),
    }),
  });

  const handleSubmit = async (data, { reset }) => {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });
      console.log(data);
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        formRef.current.setErrors(errorMessages);
      }
    }
  };
  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="userName" placeholder="Insira seu nome" label="Nome: *" />
        <Input name="email" placeholder="Insira seu email" label="Email: *" />
        <Scope path="address">
          <Input name="country" placeholder="Insira seu país" label="País: *" />
          <Input
            name="state"
            placeholder="Insira seu estado"
            label="Estado: *"
          />
          <Input
            name="city"
            placeholder="Insira sua cidade"
            label="Cidade: *"
          />
        </Scope>
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}

export default UserForm;
