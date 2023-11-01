import { Container, NavLink } from "react-bootstrap"

export default function NavbarInstiutional(){
    return(
        <nav className="bg-black text-[#85dcee] font-semibold text-base h-10 ">
            <Container className="flex justify-between h-10 items-center">
                <div>Kurumsal</div>
                <div className="flex gap-3">
                    <NavLink>Kurumsal</NavLink>
                    <NavLink>Başkan</NavLink>
                    <NavLink>Yönetim Kurulu</NavLink>
                    <NavLink>Kurumsal Belgeler</NavLink>
                    <NavLink>Orginizasyon Şeması</NavLink>
                </div>
            </Container>
        </nav>
    )
}