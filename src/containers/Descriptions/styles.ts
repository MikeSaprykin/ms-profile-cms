import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionsSubHeader = styled.p`

`;

export const ButtonLinkContent = styled(Link)`
  padding: 12px 30px;
  color: #fff;
  text-decoration: none;
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

export const AddDescriptionContent = styled.div`
  display: flex;
  align-items: center;
`;

export const AddDescriptionTitle = styled.h3`
  margin: 0 0 0 2rem;
`;
