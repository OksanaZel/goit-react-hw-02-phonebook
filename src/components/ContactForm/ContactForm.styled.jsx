import styled from "@emotion/styled/macro";

export const Form = styled.form``;

export const Label = styled.label`
display: flex;
flex-direction: column;
max-width: 400px;
margin-bottom: 25px;
`;

export const Input = styled.input`
border: 1px solid lightblue;
border-radius: 4px;
font-size: 20px;

&:focus {
    outline: none;
    border: 1px solid #2196f3;
}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  min-width: 200px;
  padding: 2px 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #ffffff;
  background-color: #2196f3;
  
  & svg {
      height: 18px;
      width: 18px;
      margin-right: 10px;
  }
`;