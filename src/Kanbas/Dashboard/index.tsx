import React from "react";
import "./index.css"
import { Link } from "react-router-dom";
import { courses } from "../Database";
function Dashboard() {
    let course_count = courses.length
    return (
        <div className="p-4 wd-kanbas-dashboard">
            <h1>Dashboard</h1> <hr />
            <h2>Published Courses ({`${course_count}`})</h2> <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4 course-card">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`/Images/${course.image}`} className="card-img-top course-img" alt={""}
                                />
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                          style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.name} </Link>
                                    <p className="card-text">{course.name}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                                        Go </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;