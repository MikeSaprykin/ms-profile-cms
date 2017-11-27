import styled from 'styled-components';

export const Input = styled.input`
    border: 0;
    background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#d2d2d2, #d2d2d2);
    background-size: 0 2px, 100% 1px;
    background-repeat: no-repeat;
    background-position: bottom, 50% calc(100% - 1px);
    background-color: transparent;
    transition: background 0s ease-out;
    float: none;
    box-shadow: none;
    border-radius: 0;
    font-weight: 400;
    height: 36px;
    font-size: 16px;
    line-height: 1.42857143;
    display: block;
    color: #555;
    outline: none;
    flex-grow: 1;
    
    &::placeholder {
      color: #AAAAAA;
      opacity: .7;
    }
    
    &.has-success {
      border-color: #2b542c;
    }
`;

export const Label = styled.label`
    font-size: 16px;
    line-height: 1.42857143;
    color: #aaa;
    font-weight: 400;
    display: inline-block;
    margin-top: 8px;
    flex-grow: .5;
    width: 20%;
`;

export const InputGroup = styled.div`
  display: flex;
  margin: 0 2rem;
  align-items: flex-start;
  min-height: 50px;
`;

export const InputWrapper = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  &:before {
    content: '';
    position: absolute;
    z-index: 5;
    bottom: 0;
    right: 50%;
    height: 2px;
    width: 0;
    visibility: hidden;
    transition: .2s ease all;
  }

  &:after {
    content: '';
    position: absolute;
    z-index: 5;
    bottom: 0;
    left: 50%;
    height: 2px;
    width: 0;
    visibility: hidden;
    transition: .2s ease all;
  }
  &.active {
      &:after {
        visibility: visible;
        left: 0;
        width: 100%;
        background: #55acee;
      }

      &:before {
        visibility: visible;
        right: 0;
        width: 100%;
        background: #55acee;
      }
      &.invalid {
        &:after {
          background-color: #F1453D;
        }
        &:before {
          background-color: #F1453D;
        }
      }
      &.valid {
        &:after {
          background-color: #50AE55;
        }
        &:before {
          background-color: #50AE55;
        }
      }
  }
`;

export const InputHelperText = styled.p`
  font-size: 12px;
  position: absolute;
  bottom: -20px;
  color: #8A8A8A;
  margin: 0;
  left: 0;
`;
