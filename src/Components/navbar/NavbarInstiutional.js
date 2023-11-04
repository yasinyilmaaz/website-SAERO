import { Container } from "react-bootstrap"
import { url } from "../../routers/utils"
import { NavLink } from "react-router-dom"

export default function NavbarInstiutional(){
    return(
        <nav className="bg-black text-[#85dcee] font-semibold text-base h-10 border-t border-t-[#85dcee]">
            <Container className="flex justify-between h-10 items-center">
                <div>Kurumsal</div>
                <div className="flex gap-3">
                    <NavLink className={"no-underline text-[#85dcee]"} to={url("homepage.Corporate")}>Kurumsal</NavLink>
                    <NavLink className={"no-underline text-[#85dcee]"} to={url("homepage.Corporate.Minister")}>Başkan</NavLink>
                    <NavLink className={"no-underline text-[#85dcee]"}>Yönetim Kurulu</NavLink>
                    <NavLink className={"no-underline text-[#85dcee]"}>Kurumsal Belgeler</NavLink>
                    <NavLink className={"no-underline text-[#85dcee]"}>Orginizasyon Şeması</NavLink>
                </div>
            </Container>
        </nav>
    )
}