import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 560px;
  font-size: 25px;

  /* @media (min-width: 768px) {
    width: 100%;
  } */
`;

export const Label = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  /* margin: 10px; */
  width: 560px;
`;

export const Input = styled.input`
  display: flex;
  text-align: center;
  /* flex: 1; */
  /* font-size: 16px; */
  /* padding-left: 10px; */
  border: 1px solid #ccc;
  border-radius: 10px;
  /* margin-left: 10px; */
  width: 554px;
  height: 36px;
  font-size: 16px;

  &:focus {
    outline: none;
    border: 1px solid #000000;
    border-radius: 10px;
  }
`;
