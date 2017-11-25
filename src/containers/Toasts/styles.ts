import styled, { keyframes } from 'styled-components';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const fadeInDown = keyframes`
  0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }

    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
`;

const fadeOutUp = keyframes`
  0% {
    opacity: 1;
  }

    to {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
  }
`;

export const ToastsContainer = styled.div`
  position: fixed;
  z-index: 99999;
  right: 0;
  top: 0;
  transition: height 1s;
  transform: translateZ(0);
  padding: 0 10px;
  box-sizing: border-box;
`;

export const ToastsList = styled(ReactCSSTransitionGroup)`
  .toast-enter {
    animation: ${fadeInDown} 300ms;
  }

  .toast-leave.toast-leave-active {
    animation: ${fadeOutUp} 200ms;
  }
`;
