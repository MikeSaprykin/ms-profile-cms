import * as React from 'react';
import {
    SideBarContainer,
    SideBarMenu,
    SideBarMenuItem,
    StyledLink
} from './styles';

interface SideBarMenuItem {
    route: string;
    title: string;
}

interface SideBarProps {
    menu?: Array<SideBarMenuItem>;
}

const generateSideBarLink = (item: SideBarMenuItem, i: number) => (
    <SideBarMenuItem key={i}>
        <StyledLink to={item.route} activeClassName={'active'}>
            {item.title}
        </StyledLink>
    </SideBarMenuItem>
);

export const SideBar: React.StatelessComponent<SideBarProps> = ({ menu = []}) =>
(
    <SideBarContainer>
        <SideBarMenu>
            {menu.map(generateSideBarLink)}
        </SideBarMenu>
    </SideBarContainer>
);
