import * as React from 'react';
import { Link } from 'react-router-dom';

interface SideBarMenuItem {
    route: string;
    title: string;
}

interface SideBarProps {
    menu?: Array<SideBarMenuItem>;
}

const generateSideBarLink = (item: SideBarMenuItem, i: number) => (
    <li key={i}>
        <Link to={item.route}>
            {item.title}
        </Link>
    </li>
);

export const SideBar: React.StatelessComponent<SideBarProps> = ({ menu = []}) =>
(
    <ul>
        {menu.map(generateSideBarLink)}
    </ul>
);
