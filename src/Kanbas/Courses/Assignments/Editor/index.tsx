import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import {KanbasState} from "../../../store";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    updateAssignments,
    resetAssignment,
    setCreatingMode,
    setEditingMode,
} from "./../assignmentsReducer";


function AssignmentEditor() {
    const { assignmentId, courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isCreating = useSelector((state: KanbasState) => state.assignmentsReducer.isCreating);
    const assignments = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
    const assignment = assignments.find((a) => a._id === assignmentId);

    const handleInputChange = (event:any) => {
        const { name, value } = event.target;
        dispatch(updateAssignment({ ...assignment, [name]: value }));
    };

    const handleSave = () => {
        dispatch(resetAssignment(assignment));
        dispatch(setEditingMode())
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    const handleCancel = () => {
        if (isCreating){
            dispatch(deleteAssignment(assignment));
        }
        dispatch(resetAssignment(assignment));
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };


    if (!assignment) {
        return <div>Assignment not found</div>;
    }

    return (
        <div className={"wd-courses-assignments-editor"}>
            <h2>Editing: {assignment.title}</h2>
            <div className={"wd-courses-assignments-editor"}>

                <div className={"wd-editing-field"}>
                    <label className="wd-field-label">Assignment Name</label>
                    <input
                        name="title"
                        value={assignment.title}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                        placeholder="Assignment Name"
                    />

                    <label className="wd-field-label">Description</label>
                    <textarea
                        name="description"
                        value={assignment.description}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                        placeholder="New Assignment Description"
                    />

                    <label className="wd-field-label">Points</label>
                    <input
                        name="points"
                        type="number"
                        value={assignment.points}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                        placeholder="Points"
                    />

                    <label className="wd-field-label">Due Date</label>
                    <input
                        name="dueDate"
                        type="date"
                        value={assignment.dueDate}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                    />

                    <label className="wd-field-label">Available From</label>
                    <input
                        name="availableFromDate"
                        type="date"
                        value={assignment.availableFromDate}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                    />

                    <label className="wd-field-label">Available Until</label>
                    <input
                        name="availableUntilDate"
                        type="date"
                        value={assignment.availableUntilDate}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                    />
                </div>

            </div>
            <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                Save
            </button>
            <button onClick={handleCancel} className="btn btn-danger float-end">
                Cancel
            </button>
        </div>
    );
}

export default AssignmentEditor;