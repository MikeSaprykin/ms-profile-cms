import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionsSubHeader = styled.p`
  color: #999;
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

export const AddDescriptionTitle = styled.h4`
  margin: 0 1rem;
  font-weight: 300;
`;

export const AddDescriptionFormWrapper = styled.div`
  padding-top: 50px;
`;

export const AddDescriptionSubmit = styled(Button)`
  margin: 3rem auto;
  text-align: center;
`;
