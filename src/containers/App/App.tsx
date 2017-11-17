import * as React from 'react';
import SideBar from '../../components/SideBar';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { AppWrapper, AppContent } from './styles';

interface AppProps {
    route: RouteConfig;
}

export const App: React.StatelessComponent<AppProps> = ({ route }) => {
    return (
        <AppWrapper>
            <SideBar menu={sideBarRoutes} />
            <AppContent>
                {renderRoutes(route.routes)}
            </AppContent>
        </AppWrapper>
    );
};

const sideBarRoutes: Array<{
    route: string;
    title: string;
}> = [
    {
        route: '/projects',
        title: 'Projects'
    },
    {
        route: '/technologies',
        title: 'Technologies'
    },
    {
        route: '/descriptions',
        title: 'Descriptions'
    },
    {
        route: '/categories',
        title: 'Categories'
    }
];
