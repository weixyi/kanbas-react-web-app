import {Link, Navigate, Route, Routes} from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import "./styles.css"
import Courses from "./Courses";
function Kanbas() {
    return (
        <div className="d-flex">
            <div className={"sidebar no-padding"}>
                <KanbasNavigation/>
            </div>

            <div className={"main-content"} style={{ flexGrow: 1 }}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                </Routes>
            </div>
        </div>
    );}
export default Kanbas;
