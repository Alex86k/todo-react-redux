import {
    ADD_TODO,
    HIDE_ALERT,
    REMOVE_TODO,
    SET_VISIBILITY_FILTER,
    SHOW_ALERT,
    SHOW_LOADER,
    TOGGLE_TODO
} from "../constants";

let nextTodoId = 0
export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoId++,
            todo,
            date: new Date().toLocaleDateString()
        }

    }
}

export const removeTodo = id => {
    return {
        type: REMOVE_TODO,
        payload: {
            id
        }
    }
}

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: {
        id
    }
})

export const showAlert = (text, type = 'warning') => ({
    type: SHOW_ALERT,
    payload: {
        text,
        type
    }
})

export const hideAlert = () => ({
    type: HIDE_ALERT
})

export const showLoader = () => ({
    type: SHOW_LOADER
})