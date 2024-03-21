import {Link, Navigate, Route, Routes} from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import "./styles.css"
import Courses from "./Courses";
import {db} from "./Database";
import { useState } from "react";



function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "panda2.jpg"
    });
    const addNewCourse = () => {
        const newCourse = { ...course,
            _id: new Date().getTime().toString() };
        setCourses([...courses, { ...course, ...newCourse }]);
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

    return (
        <div className="d-flex">
            <div className={"sidebar no-padding"}>
                <KanbasNavigation/>
            </div>

            <div className={"main-content"} style={{ flexGrow: 1 }}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<
                        Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        setCourses={setCourses}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                    />} />
                    <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
                </Routes>
            </div>
        </div>
    );}
export default Kanbas;
