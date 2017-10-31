import styled from 'styled-components';

const GREEN_COLOR = '#7EB492';

export const TodoHeader = styled.div`
  border-radius: 4px;
  margin: 1rem 0;
  background-color: ${GREEN_COLOR};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.18);
  display: flex;
  padding: 0.2rem 1rem;
  align-items: center;
  color: white;
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14), 0 1px 2px rgba(0, 0, 0, 0.22);
  }
`;

export const TodoHeaderPlus = styled.div`
  user-select: none;
  cursor: pointer;
  margin-right: 0.5rem;
  i {
    font-size: 28px;
  }
`;

export const TodoHeaderText = styled.p`
  color: white;
  maring: 0;
`;

export const TodoFilterWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

export const TodoFilterItem = <any> styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  margin: 0 0.5rem;
  font-size: 16px;
  user-select: none;
  outline: none;
  cursor: pointer;
  background-color: ${(props: any) => (props.active ? '#69f0ae' : '#e0e0e0')};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.18);
  color: ${GREEN_COLOR};
  &:hover {
    background-color: ${(props: any) => (props.active ? '#b9f6ca' : '#eee')};
  }
  transition: all ease-in-out 0.1s;
`;

export const TodoHeaderInput = <any> styled.input`
  background: transparent;
  color: #fff;
  placeholder-color: #fff;
  &::placeholder {
    color: #fff;
  }
  outline: none;
  border: none;
  font-size: 16px;
`;
