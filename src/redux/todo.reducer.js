import { todoActionTypes } from "./todo.type"

const INTIAL_STATE = {
    todoList: []
}
export const todoReducer = (state=INTIAL_STATE, action) => {
    switch (action.type) {
        case todoActionTypes.SHOW_TODOS :
            return {
               ...state,
               todoList: action.payload
            }
    
        default:
            return state
    }
}