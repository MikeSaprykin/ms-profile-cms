import styled, { keyframes } from 'styled-components';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Card } from '../Card';

const hideSweetAlert = keyframes`
    0% {
      transform: scale(1);
      opacity: 1;
    }
    
    100% {
      transform: scale(0);
      opacity: 0;
    }
`;

const sweetAlertAnimation = keyframes`
    0% {
        -webkit-transform: scale(.7);
        transform: scale(.7)
    }

    45% {
        -webkit-transform: scale(1.05);
        transform: scale(1.05)
    }

    80% {
        -webkit-transform: scale(.95);
        transform: scale(.95)
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  &.visible {
    z-index: 99999;
  }
  &:not(.visible) {
    transition: z-index 0.5s step-end;
  }
`;

export const ModalOverlayWrapper = styled(ReactCSSTransitionGroup)`
  .modal-overlay-enter {
    opacity: 0.01;
  }
  .modal-overlay-enter.modal-overlay-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }
  .modal-overlay-leave {
    opacity: 1;
  }
  .modal-overlay-leave.modal-overlay-leave-active {
    opacity: 0.01;
    transition: opacity 100ms ease-in;
  }
`;

export const ModalOverlay = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: background-color 0.1s;
`;

export const ModalContentWrapper = styled(ReactCSSTransitionGroup)`
  position: relative;
  z-index: 900;
  .modal-content-enter {
    animation: ${sweetAlertAnimation} 300ms;
  }
  .modal-content-leave.modal-content-leave-active {
    animation: ${hideSweetAlert} 200ms;
  }
`;

export const ModalContent = styled(Card)`
  position: relative;
  z-index: 900;
  width: 500px;
  min-height: 200px;
`;
