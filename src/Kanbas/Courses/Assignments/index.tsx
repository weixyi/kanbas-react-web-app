import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css"
import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {KanbasState} from "../../store";
import { useNavigate } from 'react-router-dom';

import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    updateAssignments,
    setCreatingMode,
} from "./assignmentsReducer";
import {deleteModule} from "../Modules/modulesReducer";


function Assignments() {
    const { courseId } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);

    const handleNewAssignment = () => {
        dispatch(addAssignment(assignments));
        dispatch(updateAssignment({...assignment, course:courseId}));
        dispatch(setCreatingMode());
        navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`);
    };

    console.log(assignmentList);

    return (
        <div className={"wd-courses-assignments"}>
            <div className={"wd-button-container"}>
                <button onClick={handleNewAssignment} className={"wd-button"} >+ Assignment</button>
            </div>


            <ul className="list-group wd-section">
                <li className="">
                    <div className={"section-title"}>
                        <span>
                        <FaEllipsisV className="me-2"/>
                        Assignments
                    </span>
                        <span className="float-end">
                    <FaCheckCircle className="text-success"/>
                    <FaPlusCircle className="ms-2 text-success"/><FaEllipsisV className="ms-2"/>
                    </span>
                    </div>
                    <ul className="wd-assignment-items">
                        { assignmentList.filter((assignment) => assignment.course === courseId)
                            .map((a) =>
                                (<li className="list-group-item">
                                <FaEllipsisV className="me-2"/>
                                <Link className={"li-title"}
                                      to={`/Kanbas/Courses/${courseId}/Assignments/${a._id}`}>
                                    {a.title}
                                </Link>
                                <span className="float-end">
                                <FaCheckCircle className="text-success"/>
                                <FaEllipsisV className="ms-2"/>
                                <button className="wd-edit-button"
                                        onClick={() => dispatch(deleteAssignment(a))}>
                                Delete
                                </button>
                            </span>
                                </li>))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Assignments;
