import {ADD_TODO, REMOVE_TODO,  TOGGLE_TODO} from "../constants";

export const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    ...action.payload,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map(
                todo => todo.id === action.payload.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        case REMOVE_TODO:
            return state.filter(
                todo => todo.id !== action.payload.id
            )
        default:
            return state
    }
}