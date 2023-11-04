import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export default function NavbarProjects(){
    return(
        <nav className="bg-black text-[#7ae4a0] font-semibold text-base h-10 ">
            <Container className="flex justify-between h-10 items-center">
                <div>Projeler</div>
                <div className="flex gap-3">
                    <NavLink>Projeler</NavLink>
                    <NavLink>Başkan</NavLink>
                    <NavLink>Yönetim Kurulu</NavLink>
                    <NavLink>Kurumsal Belgeler</NavLink>
                    <NavLink>Orginizasyon Şeması</NavLink>
                </div>
            </Container>
        </nav>
    )
}