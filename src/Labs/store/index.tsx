import { configureStore } from "@reduxjs/toolkit";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import counterReducer from "../a4/ReduxExamples/CounterRedux/counterReducer";
import todosReducer from "../a4/ReduxExamples/todos/todosReducer";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer";

export type TodoType = {
    id: string;
    title: string;
}

export interface LabState {
    helloReducer: {
        message: string;
    };
    counterReducer:{
        count: number;
    }
    addReducer: {
        sum: number;
    };
    todosReducer:{
        todos: TodoType[];
        todo: TodoType;
    }
}

const store = configureStore({
    reducer: {
        helloReducer,
        counterReducer,
        addReducer,
        todosReducer,
    },
});
export default store;