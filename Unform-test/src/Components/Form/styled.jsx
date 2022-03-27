import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0 0 10px 2px gray;
    width: 480px;
    height: 85vh;
    padding: 20px;
    border-radius: 10px;
  }
`;
export const Button = styled.button`
  background-color: rgb(23, 73, 201);
  border: 1px solid transparent;
  padding: 10px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
`;
