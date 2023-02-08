import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: inline-flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`;
export const ContactInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
`;

export const DeleteBtn = styled.button`
  padding: 4px;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 30px;

  border: none;
  border-radius: 4px;
  background-color: rgb(210, 156, 241);
  color: black;
  font-size: 16px;
  &:hover,
  &:focus,
  &:active {
    background-color: rgb(210, 110, 241);
  }
`;
