import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { TodosQuerry } from './root.querry';
import { Root, AppPropTypes } from './root.container';

const mapStateToProps = (state: any) => ({
  state
});

const componentWithGraph = graphql<any, AppPropTypes>( TodosQuerry)(Root);

export default <any> connect(mapStateToProps)(componentWithGraph);
