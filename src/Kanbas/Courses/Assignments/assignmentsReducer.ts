import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    isCreating: false,
    assignments: assignments,
    assignment: {
        title: "New Assignment Title",
        course: "Undefined Course",
        _id: new Date().getTime().toString(),
        description:"",
        points: 100,
        dueDate:"2024-05-01",
        availableFromDate:"2024-05-01",
        availableUntilDate:"2024-05-01",
    },
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers:{
        setCreatingMode:(state)=>{
            state.isCreating = true;
        },

        setEditingMode:(state)=>{
            state.isCreating = false;
        },


        addAssignment : (state, action) => {
            state.assignments = [
                ...state.assignments,
                state.assignment,
            ];
        },

        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload._id
            );
        },

        updateAssignment: (state, action)=> {
            state.assignments = state.assignments.map(
                (ass) =>
                (ass._id === action.payload._id ? action.payload : ass));
        },

        updateAssignments: (state, action) => {
            state.assignments = action.payload;
        },

        resetAssignment:(state, payload) => {
            state.assignment = {
                title: "New Assignment Title",
                course: "Undefined Course",
                _id: new Date().getTime().toString(),
                description:"",
                points: 100,
                dueDate:"2024-05-01",
                availableFromDate:"2024-05-01",
                availableUntilDate:"2024-05-01",
            };
        }



    },

});
export const {
    setEditingMode,
    setCreatingMode,
    addAssignment,
    deleteAssignment,
    updateAssignment,
    updateAssignments,
    resetAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
