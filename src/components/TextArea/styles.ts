import styled from 'styled-components';

export const TextArea = styled.textarea`
  border: 0;
  background-image: linear-gradient(#9c27b0, #9c27b0),
    linear-gradient(#d2d2d2, #d2d2d2);
  background-size: 0 2px, 100% 1px;
  background-repeat: no-repeat;
  background-position: bottom, 50% calc(100% - 1px);
  background-color: transparent;
  transition: background 0s ease-out;
  float: none;
  box-shadow: none;
  border-radius: 0;
  font-weight: 400;
  height: 66px;
  font-size: 16px;
  line-height: 1.42857143;
  display: block;
  color: #555;
  outline: none;
  flex-grow: 1;

  &::placeholder {
    color: #aaaaaa;
    opacity: 0.7;
  }
  resize: none;
`;
