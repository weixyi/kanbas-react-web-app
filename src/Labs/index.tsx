import Assignment3 from "./a3";
import {Link, Route, Routes} from "react-router-dom";
import Nav from "../Nav";
import PathParameters from "./a3/routing/PathParameters";
import Classes from "./a3/Classes";
import Styles from "./a3/Styles";
import ConditionalOutput from "./a3/ConditionalOutput";
import Highlight from "./a3/Hightlight";
function Labs() {
    return(
        <div>
            <Nav/>
            <h1>Assignment 3</h1>
            <h1>Highlight</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
            vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
            vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <PathParameters/>
            <Routes>
                <Route path="/a3/*" element={<Assignment3 />} />
            </Routes>
        </div>
    )
}
export default Labs;