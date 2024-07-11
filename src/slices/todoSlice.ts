import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemType } from "../models/List";
import { RootState } from "../store/store";


const initialState = {
    todos: <ItemType[]>[{
        id: crypto.randomUUID(),
        title: 'Add a todo item',
        completed: false,
        createdOn: Date.now().toString()
    },
    {
        id: crypto.randomUUID(),
        title: 'Make a todo application using react-redux',
        completed: true,
        createdOn: Date.now().toString(),
        completedOn: Date.now().toString()
    }],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ItemType>) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<ItemType>) => {
            const { id } = action.payload;
            state.todos = state.todos.filter(item => item.id != id)
        },
        markCompleted: (state, action: PayloadAction<ItemType>) => {
            const { id } = action.payload;
            state.todos.forEach(item => {
                if (item.id == id) {
                    item.completed = true;
                    item.completedOn = Date.now().toString();
                }
            })
        },
        markIncomplete: (state, action: PayloadAction<ItemType>) => {
            const { id } = action.payload;
            state.todos.forEach(item => {
                if (item.id == id) {
                    item.completed = false;
                    delete item.completedOn;
                }
            })
        }
    }
})

export const { addTodo, removeTodo, markCompleted, markIncomplete } = todoSlice.actions;
export default todoSlice.reducer;

export const todoListSelector = (state: RootState) => {
    return state.todo.todos.filter((item: ItemType) => item.completed != true);
}

export const completedListSelector = (state: RootState) => {
    return state.todo.todos.filter((item: ItemType) => item.completed == true);
}