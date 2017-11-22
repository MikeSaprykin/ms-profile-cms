import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideBarContainer = styled.div`
  position: fixed;
  width: 200px;
  left: 0;
  top: 0;
  bottom: 0;
  background: #00d2ff;
  background: -webkit-linear-gradient(to bottom, #3a7bd5, #00d2ff);
  background: linear-gradient(to bottom, #3a7bd5, #00d2ff);
  color: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;

export const SideBarMenu = styled.ul`
  margin: 0;
  padding: 0;
`;

export const SideBarMenuItem = styled.li`
  list-style: none;
  height: auto;
  min-height: 40px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  padding: 0.5rem 0.5rem;
  text-decoration: none;
  color: white;
  flex-grow: 1;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    z-index: 5;
    bottom: 0;
    right: 50%;
    height: 2px;
    width: 0;
    visibility: hidden;
    transition: 0.2s ease all;
  }
  &::after {
    content: '';
    position: absolute;
    z-index: 5;
    bottom: 0;
    left: 50%;
    height: 2px;
    width: 0;
    visibility: hidden;
    transition: 0.3s ease all;
  }
  &.active,
  &:hover {
    &::after {
      visibility: visible;
      left: 0;
      width: 100%;
      background: white;
    }

    &::before {
      visibility: visible;
      right: 0;
      width: 100%;
      background: white;
    }
  }
`;
