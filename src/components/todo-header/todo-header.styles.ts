import styled from 'styled-components';

export const TodoHeader = styled.div`
  border-radius: 4px;
  margin: .5rem 0;
  background-color: #678865;
  display: flex;
  width: 100%;
  padding: .2rem 1rem;
  align-items: center;
  color: white;
`;

export const TodoHeaderPlus = styled.div`
  user-select: none;
  cursor: pointer;
  margin-right: .5rem;
  i {
    font-size: 28px;
  }
`;

export const TodoHeaderText = styled.p`
  color: white;
  maring: 0;
`;

export const TodoFilterWrapper = styled.div`

`;

export const TodoFilterItem = styled.button`

`;
