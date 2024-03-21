import "./index.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../Database";
function Dashboard() {
    const [courses, setCourses] = useState(db.courses);
    let course_count = courses.length
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "panda2.jpg"
    });
    const addNewCourse = () => {
        const newCourse = { ...course,
            _id: new Date().getTime().toString() };
        setCourses([...courses, { ...course, ...newCourse }]);
        course_count +=1 ;
    };


    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };


    type Course = {
        _id: string;
        name: string;
        number: string;
        startDate: string;
        endDate: string;
        // ... other fields
    };

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
                                        <button onClick={updateCourse} className="btn btn-primary ">
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