import React from 'react'
import {Todo} from "./Todo";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import PropTypes from 'prop-types'

export const TodoList = ({todos, toggleTodo, removeTodo}) => {

    return (
        <TransitionGroup component="ul" className="list-group">
            {todos.map(todo =>
                <CSSTransition
                    key={todo.id}
                    classNames={'todo'}
                    timeout={800}
                >
                    <Todo
                        {...todo}
                        toggleTodo={() => toggleTodo(todo.id)}
                        removeTodo={() => removeTodo(todo.id)}
                    />
                </CSSTransition>
            )}
        </TransitionGroup>)
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string,
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
}