import { Outlet } from "react-router-dom";
import NavbarTrainings from "../navbar/NavbarTrainings";
import Footers from "../footer/Footer";

export default function TrainimgsLayout(){
    return(
        <div>
            <NavbarTrainings/>
            <Outlet/>
            <Footers/>
        </div>
    )
}