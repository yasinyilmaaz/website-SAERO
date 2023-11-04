import Navbar1 from "./navbar/Navbar1"
import { Outlet } from "react-router-dom"



export default function HomePage(){
    return(
        <div className="homepage">
            <Navbar1/>
            <Outlet/>
        </div>
    )
}