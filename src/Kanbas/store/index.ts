import { configureStore } from "@reduxjs/toolkit";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
import modulesReducer from "../Courses/Modules/modulesReducer";
export interface KanbasState {
    modulesReducer: {
        modules: any[];
        module: any;
    };
    assignmentsReducer:{
        assignments:any[];
        assignment:any;
        isCreating: boolean;
    }
}
const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentsReducer
    }
});
export default store;