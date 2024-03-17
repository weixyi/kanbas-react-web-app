import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import {FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import "./index.css"

function AssignmentEditor() {
    const { assignmentId, courseId } = useParams();
    const navigate = useNavigate();
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);

    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    if (!assignment) {
        return <div>Assignment not found</div>;
    }


    return (
        <div className={"wd-courses-assignments-editor"}>
            <div className="row justify-content-end align-items-center submission-section">
                <div className="col-3 wd-color-green">
                    <FaCheckCircle/> Published
                </div>
                <div className="justify-content-end col-1">
                    <button className="assignments-btn">
                        <FaEllipsisV/>
                    </button>
                </div>
            </div>


            <h2>Editing: {assignment.title}</h2>
            <input value={assignment?.title}
                   className="form-control mb-2"/>
            <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn btn-danger float-end">
                Cancel
            </Link>
        </div>
    );
}

export default AssignmentEditor;