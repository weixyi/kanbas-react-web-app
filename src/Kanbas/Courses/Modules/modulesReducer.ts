import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";
const initialState = {
    modules: modules,
    module: { name: "New Module 123", description: "New Description" },
};
const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {

    },
});
export const {  } = modulesSlice.actions;
export default modulesSlice.reducer;
