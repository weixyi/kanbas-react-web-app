import courses from "./courses.json";
import modules from "./modules.json"
import assignments from "./assignments.json"
import grades from "./grades.json"
import enrollments from "./enrollments.json"
import users from "./users.json"

export {
    courses,
    modules,
    assignments,
    users,
    enrollments,
    grades,
};

const db = {
    courses,
    modules,
    assignments,
    grades,
    enrollments,
    users,
};

// Exporting the db object
export { db };