import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Root;