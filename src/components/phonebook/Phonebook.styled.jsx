import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 20px;
  align-items: center;
  width: 560px;
`;

export const Input = styled.input`
  width: 554px;
  /* padding: 10px; */
  height: 36px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  text-align: center;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  margin: 20px auto 0 auto;
  /* padding: 30px; */
  width: 560px;
  padding: 20px;
`;

export const Title = styled.h1`
  display: flex;
  font-size: 36px;
  /* margin: 0 auto 30px auto; */
  width: 560px;
  justify-content: center;
`;

export const Section = styled.section`
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.color};
  color: white;
  font-size: 20px;
  padding: 8px 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 200px;
  height: 60px;

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

Button.defaultProps = {
  color: 'green',
  hoverColor: 'darkgreen',
};
