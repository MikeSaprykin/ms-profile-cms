import styled from 'styled-components';
import { Button, DangerButton } from '../Button';

export const DeleteDescriptionModalWrapper = styled.div`
  padding: 1rem 2rem;
`;

export const DeleteDescriptionHeading = styled.h3`
    color: #595959;
    font-size: 22px;
    text-align: center;
    font-weight: 600;
    text-transform: none;
    position: relative;
    margin: 0 0 .4em;
    padding: 0 0 1rem;
    word-wrap: wrap;
    border-bottom: 1px solid #eee;
`;

export const DeleteDescriptionSubHeading = styled.p`
    font-size: 18px;
    text-align: center;
    font-weight: 300;
    position: relative;
    float: none;
    margin: 0;
    padding: 0;
    line-height: normal;
    color: #545454
`;

export const DeleteDescriptionButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem auto .5rem;
  width: 60%;
`;
