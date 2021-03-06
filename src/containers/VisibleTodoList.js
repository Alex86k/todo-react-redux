import { connect } from 'react-redux'
import {removeTodo, showAlert, toggleTodo} from '../actions'
import { TodoList } from "../components/TodoList";
import { VisibilityFilters } from "../constants";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => {
        dispatch(removeTodo(id))
        dispatch(showAlert('Заметка успешно удалена', 'success'))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)