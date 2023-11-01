import { Container, NavLink } from "react-bootstrap";

export default function NavbarHome(){
    return(
        <nav className="bg-black text-gray-200 opacity-70 h-auto font-sans font-semibold py-2">
            <Container className="flex justify-between items-center">
                <NavLink>
                <div className="nav-link" style={{"--color":"white"}}>
                    <div className="nav-line"></div>
                    <div>0</div>
                </div>
                </NavLink>
                <NavLink  >
                <div className="nav-link"  style={{"--color":"#85dcee"}}>
                    <div className="nav-line"></div>
                    <div className="nav-text">01 KURUMSAL</div>
                </div>
                </NavLink>
                <NavLink>
                <div className="nav-link"  style={{"--color":"#7ae4a0"}}>
                    <div className="nav-line"></div>
                    <div className="nav-text">O2 PROJELER</div>
                </div>
                </NavLink>
                <NavLink>
                <div className="nav-link"  style={{"--color":"#e9bb7e"}}>
                    <div className="nav-line"></div>
                    <div className="nav-text">O3 EĞİTİMLER VE SOSYAL FARKINDALIK</div>
                </div>   
                </NavLink>
                <NavLink>
                <div className="nav-link"  style={{"--color":"#a595ff"}}>
                    <div className="nav-line"></div>
                    <div className="nav-text">O4 ULUSAL VE ULISLAR ARASI FALİYETLER</div>
                </div>
                </NavLink>
            </Container>
        </nav>
    )
}