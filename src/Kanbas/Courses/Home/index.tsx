import ModuleList from "../Modules/List";
import Status from "../Status";
import "./index.css"
function Home() {
    return (
        <div className={"wd-courses-home-screen"}>
            <ModuleList />
            <Status/>
        </div>
    );
}
export default Home;