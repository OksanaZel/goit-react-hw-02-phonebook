import styled from "@emotion/styled/macro";

export const ContactListContainer = styled.ul`
display: flex;
flex-direction: column;
`;

export const ContactListItem = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 25px;
max-width: 450px;

& svg {
    width: 18px;
    height: 18px;
}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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
    color: #fff;
    height: 18px;
    width: 18px;
    margin-right: 10px;
  }
`;

