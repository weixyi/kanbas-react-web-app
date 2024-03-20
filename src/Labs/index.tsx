import Assignment3 from "./a3";
import Assignment4 from "./a4";
import {Link, Route, Routes} from "react-router-dom";
import Nav from "../Nav";
import PathParameters from "./a3/routing/PathParameters";
import Classes from "./a3/Classes";
import Styles from "./a3/Styles";
import ConditionalOutput from "./a3/ConditionalOutput";
import Highlight from "./a3/Hightlight";
import store from "./store"
import {Provider} from "react-redux"
function Labs() {
    return(
        <Provider store={store}>
            <div>
                <Nav/>
                <Routes>
                    <Route path="/a3/*" element={<Assignment3/>}/>
                    <Route path="/a4/*" element={<Assignment4/>}/>
                </Routes>
            </div>
        </Provider>
    )
}

export default Labs;