import * as React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { descriptionsQuery } from './query';
import { QueryProps, graphql } from 'react-apollo';

interface DescriptionsData extends QueryProps {
    descriptions: Array<any>;
}

interface DescriptionsRootProps extends QueryProps {
    data: DescriptionsData;
    route: RouteConfig;
}

export class DescriptionsRootComponent extends React.Component<DescriptionsRootProps>{
    render() {
       return (
            <div>
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}

export const DescriptionsRoot = DescriptionsRootComponent;
