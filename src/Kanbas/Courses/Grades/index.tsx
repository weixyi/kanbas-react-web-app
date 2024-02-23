import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css"
import {FaCog, FaDownload, FaUpload} from "react-icons/fa";
import {useState} from "react";

function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className={"wd-courses-grades"}>

            <div className="d-flex grades-btn-set justify-content-end">
                <button className="btn btn-outline-secondary mr-2">
                    <FaUpload/> Import
                </button>
                <div className="btn-group mr-2">
                    <button className="btn btn-outline-secondary dropdown-toggle" onClick={toggleDropdown}>
                        <FaDownload/> Export
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            {/* Dropdown Menu Items Here */}
                        </div>
                    )}
                </div>
                <button className="btn btn-outline-secondary">
                    <FaCog/>
                </button>
            </div>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Student Name</th>
                        {as.map((assignment, index) => (
                            <th key={index}>{assignment.title}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {es.map((enrollment, eIndex) => {
                        const user = users.find((user) => user._id === enrollment.user);
                        return (
                            <tr key={eIndex}>
                                <td className={"student-name"}>{user?.firstName} {user?.lastName}</td>
                                {as.map((assignment, aIndex) => {
                                    const grade = grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                                    );
                                    return (<td key={aIndex}>{grade?.grade || "N/A"}</td>);
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Grades
