import "./index.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";

type Course = {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    image: string;
};

interface DashboardProps {
    courses: Course[];
    course: Course;
    setCourses: (courses: Course[]) => void;
    setCourse: (course: Course) => void;
    addNewCourse: () => void;
    deleteCourse: (courseId: string) => void;
    updateCourse: (course: Course) => void;
}

function Dashboard(
    {
       courses,
       course,
       setCourse,
       setCourses,
       addNewCourse,
       deleteCourse,
       updateCourse,
    }: DashboardProps)
{
    let course_count = courses.length


    const handleCourseChange = (courseId: string, field: keyof Course, value: string) => {
        const updatedCourses = courses.map(course => {
            if (course._id === courseId) {
                return { ...course, [field]: value };
            }
            return course;
        });
        setCourse(course)
        setCourses(updatedCourses);
        // setCourse({...course, [field]:value})
    };



    return (
        <div className="p-4 wd-kanbas-dashboard">
            <h1>Dashboard</h1>
            <hr/>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2>Published Courses ({`${course_count}`})</h2>
                <div>
                    <button className="btn btn-primary" onClick={addNewCourse}>
                        Add a new course
                    </button>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4 course-card">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{width: 300}}>
                            <div className="card">
                                <img src={`/Images/${course.image}`} className="card-img-top course-img" alt={""}
                                />
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                          style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                        {course.name} </Link>
                                    <p className="card-text">
                                        <input value={course.name} className="form-control"
                                               onChange={(e) => handleCourseChange(course._id, 'name', e.target.value)}
                                        />
                                    </p>
                                    <div className="flex-row">
                                        <label>Course Number:</label>
                                        <input
                                            value={course.number}
                                            className="form-control"
                                            onChange={(e) => handleCourseChange(course._id, 'number', e.target.value)}
                                        />
                                    </div>
                                    <div className="flex-row">
                                        <label>Start Date:</label>
                                        <input
                                            value={course.startDate}
                                            className="form-control"
                                            type="date"
                                            onChange={(e) => handleCourseChange(course._id, 'startDate', e.target.value)}
                                        />
                                    </div>
                                    <div className="flex-row">
                                        <label>End Date:</label>
                                        <input
                                            value={course.endDate}
                                            className="form-control"
                                            type="date"
                                            onChange={(e) => handleCourseChange(course._id, 'endDate', e.target.value)}
                                        />
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <button
                                            onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}
                                            className="btn btn-primary btn-danger" // Assuming you want to style it as a danger (delete) button
                                        >Delete
                                        </button>
                                        <button onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }} className="btn btn-primary ">
                                            Edit
                                        </button>
                                        <button onClick={() => updateCourse(course)} className="btn btn-primary ">
                                            Update
                                        </button>
                                        {/*<Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">*/}
                                        {/*    Go*/}
                                        {/*</Link>*/}
                                    </div>
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