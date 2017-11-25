import styled from 'styled-components';

const colors = {
  success: {
    color: '#5cb860',
    shadow:
      '0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(76, 175, 80, .4)',
  },
  warning: {
    color: '#ffa21a',
    shadow:
      '0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(255, 152, 0, .4)',
  },
  danger: {
    color: '#f55a4e',
    shadow:
      '0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(244, 67, 54, .4)',
  },
  primary: {
    color: '#00bcd4',
    shadow:
      '0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(0, 188, 212, .4)',
  },
};

export const ToastItem = styled.div`
  color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  margin-top: 10px;
  border-radius: 3px;
  &.success {
    background-color: ${colors.success.color};
    box-shadow: ${colors.success.shadow};
  }
  &.warning {
    background-color: ${colors.warning.color};
    box-shadow: ${colors.warning.shadow};
  }
  &.danger {
    background-color: ${colors.danger.color};
    box-shadow: ${colors.danger.shadow};
  }
  &.primary {
    background-color: ${colors.primary.color};
    box-shadow: ${colors.primary.shadow};
  }
`;

export const ToastMessage = styled.div`
  word-wrap: break-word;
`;

export const ToastClose = styled.p`
  margin: 4px;
  cursor: pointer;
  padding: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }
`;
