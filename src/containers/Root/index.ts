import { connect } from 'react-redux';
import Root from './root.container';
import { toggleTodoFilter } from '../../store/todo/actions/todo.actions';
import { AppState, selectCurrentFilter } from '../../store/todo/reducers/index';

const mapStateToProps = (state: AppState) => ({
  done: selectCurrentFilter(state).done,
});

export default connect<any, any, any>(mapStateToProps, { toggleTodoFilter })(
  Root
);
