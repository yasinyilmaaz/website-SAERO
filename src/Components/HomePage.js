import Navbar1 from "./navbar/Navbar1"
import Tabs from './tabss/tabs'
import NavbarHome from "./navbar/NavbarHome"
import Footers from "./footer/Footer"
import '../homepage.css'



export default function HomePage(){


    return(
        <div className="homepage">
            <Navbar1/>
            <Tabs/>
            <Footers/>
        </div>
    )
}