import { todoActionTypes } from "./todo.type"

export const showTodo = (todoList) => ({
    type: todoActionTypes.SHOW_TODOS,
    payload: todoList
})

