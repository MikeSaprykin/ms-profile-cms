import styled, { css } from 'styled-components';
import { Card } from '../Card';

export const descriptionsMixin = () =>
  css`
    display: flex;
    align-items: center;
    justify-content: center;
    &.description-icon {
      width: 20%;
      display: block;
    }
    ,
    &.description-title {
      width: 50%;
    }
    ,
    &.description-actions {
      width: 30%;
    }
  `;
export const DescriptionContainer = styled.div`
  width: 30%;
`;

export const DescriptionWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const DescriptionActionsBlock = styled.div`
  i {
    margin: 0 0.2rem;
  }
`;

export const DescriptionAction = styled.i`
  cursor: pointer;
  user-select: none;
  line-height: 1.5rem;
  vertical-align: middle;
  transition: all 0.1s ease-in-out;
  color: rgba(0, 0, 0, 0.6);
  &.expanded {
    transform: rotateX(180deg);
  }
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

export const DescriptionIcon = styled.i`
  min-height: 40px;
  display: flex;
  align-items: center;
`;

export const DescriptionLegendItem = styled.h5`
  color: rgba(0, 0, 0, 0.6);
  ${descriptionsMixin()};
`;

export const DescriptionBlock = styled.div`
  display: flex;
`;

export const DescriptionBlockItem = styled.div`
  ${descriptionsMixin()};
`;

export const DescriptionDetails = styled.div`
  border-top: 1px solid #eee;
`;
