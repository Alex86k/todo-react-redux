import React from "react";
import PropTypes from 'prop-types'

export const Todo = ({todo, date, completed, toggleTodo, removeTodo}) => {

    return (
        <li
            className="list-group-item note"
        >
            <div>
                <input type="checkbox" defaultChecked={completed}  onClick={toggleTodo}/>
                <strong
                    style={{
                        textDecoration: completed
                            ? 'line-through'
                            : 'none'
                    }}
                >
                    {todo}
                </strong>

                <small>{date}</small>
            </div>

            <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={removeTodo}
            >
                &times;
            </button>
        </li>
    )
}


Todo.propTypes = {
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    todo: PropTypes.string.isRequired
}