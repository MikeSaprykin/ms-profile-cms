import styled from 'styled-components';

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonContent = styled.span`
  i {
    margin-right: 0.5rem;
  }
`;
export const DescriptionsListWrapper = styled.div`
  padding: 0 1rem;
  position: relative;
  min-height: 175px;
  display: flex;
  & > div:not(:last-child) {
    margin-right: 1rem;
  }
  flex-wrap: wrap;
`;
