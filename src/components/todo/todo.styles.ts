import styled from 'styled-components';

export const TodoWrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.18);
  padding-left: 1rem;
  margin-bottom: 1rem;
  align-items: center;
`;

export const TodoCheckBox = styled.p`
  margin: 0;
  cursor: pointer;
  color: #64b5f6;
  outline: none;
  margin-right: 0.5rem;
  user-select: none;
`;
