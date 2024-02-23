import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css"

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className={"wd-courses-assignments"}>
            <ul className="list-group wd-section">
                <li className="">
                    <div className={"section-title"}>
                        <span >
                        <FaEllipsisV className="me-2"/>
                        Assignments
                    </span>
                        <span className="float-end">
                    <FaCheckCircle className="text-success"/>
                    <FaPlusCircle className="ms-2 text-success"/><FaEllipsisV className="ms-2"/>
                    </span>
                    </div>
                    <ul className="wd-assignment-items">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <FaEllipsisV className="me-2"/>
                                <Link className={"li-title"}
                                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                                    {assignment.title}
                                </Link>
                                <span className="float-end">
                                <FaCheckCircle className="text-success"/>
                                <FaEllipsisV className="ms-2"/>
                            </span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Assignments;
