import { Outlet } from "react-router-dom";
import NavbarInternational from "../navbar/NavbarInternational";
import Footers from "../footer/Footer";

export default function InternationalLayout(){
    return(
        <div>
            <NavbarInternational/>
            <Outlet/>
            <Footers/>
        </div>
    )
}