import { combineReducers } from 'redux'
import { todos } from './todos'
import { alert } from './alert'
import { visibilityFilter } from './visibilityFilter'

export const rootReducer = combineReducers({
    todos,
    visibilityFilter,
    alert
})