import * as React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

interface DescriptionsRootProps {
    route: RouteConfig;
}

export class DescriptionsRoot extends React.Component<DescriptionsRootProps> {
    render() {
       return (
            <div>
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}
