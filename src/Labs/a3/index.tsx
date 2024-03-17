import JavaScript from "./JavaScript";
import {Route, Routes} from "react-router-dom";
import Add2 from "./routing/Add2";
import Add from "./Add";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import Highlight from "./Hightlight";
import ConditionalOutput from "./ConditionalOutput";
import Styles from "./Styles";
import Classes from "./Classes";
import PathParameters from "./routing/PathParameters";

function Assignment3() {
    return (
        <div>
            <h1>Assignment 3</h1>
            <h1>Highlight</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
            vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident
            voluptates.
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe
                totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident
                voluptates.
            </Highlight>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
            vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident
            voluptates.
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <PathParameters/>
            <Routes>
                <Route path="add/:a/:b" element={<Add2/>}/>
                {/* Other routes for Assignment3 can be added here */}
            </Routes>
            <h1>Assignment 3</h1>
            <TodoList/>
            <TodoItem/>
            <Add a={33} b={4}/>
            <JavaScript/>
        </div>
    );
}

export default Assignment3;