import { Outlet } from "react-router-dom";
import NavbarProjects from "../navbar/NavbarProjects";
import Footers from "../footer/Footer";

export default function ProjectsLayout(){
    return(
        <div>
            <NavbarProjects/>
            <Outlet/>
            <Footers/>
        </div>
    )
}