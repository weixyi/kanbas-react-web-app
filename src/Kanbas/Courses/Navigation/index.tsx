import React from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';
import './index.css';

function CoursesNavigation() {

    const { pathname } = useLocation();
    const { courseId } = useParams();
    const basePath = courseId ? `/Kanbas/Courses/${courseId}` : '/Kanbas/Courses';
    const coursesLinks = [
        { label: "Home", path: `${basePath}/Home` },
        { label: "Modules", path: `${basePath}/Modules` },
        { label: "Piazza", path: `${basePath}/Piazza` },
        { label: "Zoom Meetings", path: `${basePath}/ZoomMeetings` },
        { label: "Assignments", path: `${basePath}/Assignments` },
        { label: "Quizzes", path: `${basePath}/Quizzes` },
        { label: "Grades", path: `${basePath}/Grades` },
        { label: "People", path: `${basePath}/People` },
        { label: "Panopto Video", path: `${basePath}/PanoptoVideo` },
        { label: "Discussions", path: `${basePath}/Discussions` },
        { label: "Announcements", path: `${basePath}/Announcements` },
        { label: "Pages", path: `${basePath}/Pages` },
        { label: "Files", path: `${basePath}/Files` },
        { label: "Rubrics", path: `${basePath}/Rubrics` },
        { label: "Outcomes", path: `${basePath}/Outcomes` },
        { label: "Collaborations", path: `${basePath}/Collaborations` },
        { label: "Syllabus", path: `${basePath}/Syllabus` },
        { label: "Settings", path: `${basePath}/Settings` },
    ];
    // determine if 'Home' should be active by default
    const isHomeActive = pathname === basePath || pathname.includes(`${basePath}/Home`);
    return (
        <ul className="wd-courses-navigation courses-sidebar">
            {coursesLinks.map((course, index) => (
                <li key={index}
                    className={(isHomeActive && course.label === "Home") || pathname.includes(course.path) ? "wd-active" : ""}>
                    <Link to={course.path}>{course.label}</Link>
                </li>
            ))}
        </ul>
    );
}


export default CoursesNavigation;
