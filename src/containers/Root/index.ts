import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { TodosQuerry } from './root.querry';
import Root, { AppPropTypes } from './root.container';
import { toggleTodoFilter } from '../../store/todo/actions/todo.actions';

const mapStateToProps = (state: any) => ({
  done: state.todos.filter.done,
});

export default connect<any, any, any>(mapStateToProps, { toggleTodoFilter })(Root);
