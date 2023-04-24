import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  width: 560px;
  /* max-width: 800px; */
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding-left: 10px;
  width: 548px;
  height: 40px;
`;

export const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 1rem;
  /* padding: 8px 16px;  */
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 10px;
`;

// Example for input field:

// export const Input = styled.input`
//   font-size: 1rem;
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   width: 600px;
//   font-size: 16px;
//   max-width: 400px;

//    &:focus {
//     outline: none;
//     border: 10px solid #06e98e;
//     border-radius: 10px;
//   }
// `;
