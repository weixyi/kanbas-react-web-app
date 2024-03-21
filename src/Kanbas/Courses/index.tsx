import { courses } from "../../Kanbas/Database";
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import "./index.css"
import Breadcrumb from "./Breadcrumb";
import ModuleList from "./Modules/List";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

type Course = {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    image: string;
};

interface CoursesProps {
    courses: Course[];
}

function Courses(
    {
        courses
    }: CoursesProps
) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <div>
            <Breadcrumb/>
            <CoursesNavigation/>
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{left: "320px", top: "50px"}}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Home"/>}/>
                        <Route path="Home" element={<Home/>}/>
                        <Route path="Modules" element={<Modules/>}/>
                        <Route path="Piazza" element={<h1>Piazza</h1>}/>
                        <Route path="Assignments" element={<Assignments/>}/>
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                        <Route path="Grades" element={<Grades/>}/>
                    </Routes>
                </div>
            </div>
        </div>)
    ;
}

export default Courses;