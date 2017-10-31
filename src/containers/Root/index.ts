import { graphql } from 'react-apollo';
import { TodosQuerry } from './root.querry';
import { Root } from './root.container';

export default graphql(TodosQuerry)(Root);
