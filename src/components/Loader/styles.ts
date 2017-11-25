import styled, { keyframes } from 'styled-components';

export const LoaderOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
`;

export const LoaderItem = styled.div`
  display: block;
  font-size: 4rem;
  animation: 2s ${rotate} infinite linear;
  width: 1em;
  z-index: 21;
  height: 1em;
  @keyframes rotate {
  }
`;

const strokeDashArray = keyframes`
    from {
      stroke-dasharray: 2.3525em 0.4705em;
      stroke-dashoffset: 0;
    }

    10% {
      stroke-dasharray: 2.3525em 0.4705em;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 0.001em 2.825em;
      stroke-dashoffset: -2.826em;
    }

    60% {
      stroke-dasharray: 0.001em 2.825em;
    }

    to {
      stroke-dasharray: 2.3525em 0.4705em;
      stroke-dashoffset: -2.826em;
    }
`;

export const LoaderCircle = styled.circle`
  fill: transparent;
  stroke: #3598dc;
  stroke-width: 0.07em;
  stroke-dasharray: 2.3525em 0.4705em;
  animation: 1.3s ${strokeDashArray} infinite linear, 24s infinite linear;
`;
