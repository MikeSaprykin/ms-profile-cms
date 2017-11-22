import * as React from 'react';
import { graphql } from 'react-apollo';
import { descriptionsQuery } from './querry';

export const Descriptions = () => <h1>Descriptions</h1>;
export default graphql(descriptionsQuery)(Descriptions);
