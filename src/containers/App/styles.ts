import styled from 'styled-components';
import { Card } from '../../components/Card';

export const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AppContent = styled(Card)`
  margin-right: 20px;
  margin-left: 220px;
  flex-grow: 1;
`;
