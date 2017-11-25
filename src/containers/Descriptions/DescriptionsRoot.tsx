import * as React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

interface DescriptionsRootProps {
    route: RouteConfig;
}

export const DescriptionsRoot:
    React.StatelessComponent<DescriptionsRootProps> = ({ route }) =>
    (
        <div>
            {renderRoutes(route.routes)}
        </div>
    );
