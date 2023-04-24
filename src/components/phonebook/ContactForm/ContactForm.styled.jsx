import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 560px;
  /* margin: 20px auto; */
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  width: 90%;
`;

export const Input = styled.input`
  width: 560px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid grey;
  margin-top: 5px;
`;

export const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 15px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #3e8e41;
  }
`;
