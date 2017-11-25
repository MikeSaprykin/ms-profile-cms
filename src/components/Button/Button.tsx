import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  color: #fff;
  background-color: #55acee;
  box-shadow: 0 2px 2px 0 rgba(85, 172, 238, .14), 
                0 3px 1px -2px rgba(85, 172, 238, .2), 
                0 1px 5px 0 rgba(85, 172, 238, .12);
  text-decoration: none;
  border: none;
    border-radius: 3px;
    position: relative;
    padding: 12px 30px;
    margin: 10px 1px;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0;
    will-change: box-shadow, transform;
  transition: box-shadow .2s cubic-bezier(.4, 0, 1, 1), background-color .2s cubic-bezier(.4, 0, .2, 1);
  &:hover, &:active {
    box-shadow: 0 14px 26px -12px rgba(85, 172, 238, .42), 
    0 4px 23px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(85, 172, 238, .2);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
`;

export const ButtonLink = Button.extend`
  padding: 0;
`;

export const DangerButton = Button.extend`
  background-color: #f44336;
  box-shadow: 0 2px 2px 0 rgba(244, 67, 54, .14), 
  0 3px 1px -2px rgba(244, 67, 54, .2), 
  0 1px 5px 0 rgba(244, 67, 54, .12);
  &:hover, &:active {
    box-shadow: 0 14px 26px -12px rgba(244, 67, 54, .42),
     0 4px 23px 0 rgba(0, 0, 0, .12), 
     0 8px 10px -5px rgba(244, 67, 54, .2)
  }
`;

export const DefaultButton = Button.extend`
  background-color: #999;
  box-shadow: 0 2px 2px 0 hsla(0, 0%, 60%, .14), 
  0 3px 1px -2px hsla(0, 0%, 60%, .2), 0 1px 5px 0 hsla(0, 0%, 60%, .12);
  &:hover, &:active {
    box-shadow: 0 14px 26px -12px hsla(0, 0%, 60%, .42), 
    0 4px 23px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px hsla(0, 0%, 60%, .2);
  }
`;
