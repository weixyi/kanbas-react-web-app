import Assignment3 from "./a3";
import {Link, Route, Routes} from "react-router-dom";
import Nav from "../Nav";
import PathParameters from "./a3/routing/PathParameters";
function Labs() {
    return(
        <div>
            <Nav/>
            <PathParameters/>
            <Routes>
                <Route path="/a3/*" element={<Assignment3 />} />
            </Routes>
        </div>
    )
}
export default Labs;