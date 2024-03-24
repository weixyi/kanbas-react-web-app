import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";

const initialState = {
    modules: modules,
    module: {
        description: "New Description",
        week: "New Module",
        module_id: new Date().getTime().toString(),
        "categories": []
    },
};

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers:{
        setModule: (state, action) => {
            state.module = action.payload;
        },

        addModule : (state, action) => {
            state.modules = [
                ...state.modules,
                { ...action.payload, module_id: new Date().getTime().toString() },
            ];
        },

        deleteModule: (state, action) => {
            state.modules = state.modules.filter(
                (module) => module.module_id !== action.payload
            );
        },

        updateModule: (state, action)=> {
            state.module = action.payload;
        },

        updateModules: (state, action) => {
            state.modules = action.payload;
        },

    },

});
export const {
    addModule,
    deleteModule,
    updateModule,
    setModule   ,
    updateModules,
} = modulesSlice.actions;
export default modulesSlice.reducer;
