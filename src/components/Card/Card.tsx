import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .14);
  border-radius: 2px;
  color: rgba(0, 0, 0, .87);
  background: #fff;
  margin: 35px 0;
  position: relative;
  box-sizing: border-box
`;

export const CardHeader = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1rem;
`;

export const CardBoxHeader = styled.div`
  color: white;
  position: absolute;
  display: flex;
  z-index: 200;
  top: -30px;
  left: 15px;
  background-color: #55acee;
  border-radius: 3px;
  padding: 4px;
  box-shadow: 0 14px 26px -12px rgba(85, 172, 238, .42), 
        0 4px 23px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(85, 172, 238, .2);
`;
