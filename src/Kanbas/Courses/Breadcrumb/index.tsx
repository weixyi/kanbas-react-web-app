import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import {courses} from "../../Database"
import "./index.css"

// @ts-ignore
const Breadcrumb: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    const listenToScroll = () => {
        let heightToHideFrom = 200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            isVisible && setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, [isVisible]);

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const courseIndex = pathSegments.indexOf('Courses');
    const courseId = courseIndex !== -1 && pathSegments.length > courseIndex + 1 ? pathSegments[courseIndex + 1] : null;
    const course = courses.find((course) => course._id === courseId);
    const courseTitle = course? course.name: "Course Name not found";
    const screenName = pathSegments.length > courseIndex + 2 ? pathSegments[courseIndex + 2] : null;

    return (
        isVisible && (
            <nav className={`wd-breadcrumb ${isVisible ? '' : 'd-none'}`}>
                <div>
                    <span className={"wd-breadcrumb-item"}>
                        {courseId && courseTitle && (
                            <Link className={"wd-breadcrumb active"} to={`/Courses/${courseId}`}>
                                {courseId} {courseTitle}
                            </Link>
                        )}
                        {` ${screenName}`}
                    </span>
                </div>
            </nav>
        )
    );
};

export default Breadcrumb;
