import styled from 'styled-components';

export const AddUserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
`;

export const Title = styled.h2`
  text-align: center;
  color: #00916E;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;

  input {
    border: none;
    outline: none;
    padding: 10px;
    flex: 1;
  }

  svg {
    margin: 0 10px;
    color: #555;
  }
`;

export const SubmitButton = styled.button`
  background-color: #00916E;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    color: #000000;
    background-color: #FEEFE5;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  }
`;