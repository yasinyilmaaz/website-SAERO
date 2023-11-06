import { Container } from "react-bootstrap"
import { url } from "../../routers/utils"
import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function NavbarInstiutional(){
    const [title, setTitle] = useState("Kurumsal")
    return(
        <nav className="bg-black sticky top-0 text-[#85dcee] font-semibold text-base h-10 border-t border-t-[#85dcee]">
            <Container className="flex justify-between h-10 items-center">
                <div>{title}</div>
                <div className="flex gap-3">
                    <NavLink className={"no-underline text-[#85dcee]"} to={url("homepage.Corporate")} onClick={() => setTitle("Kurumsal")}>Kurumsal</NavLink>
                    <NavLink className={"no-underline text-[#85dcee]"} to={url("homepage.Corporate.Minister")} onClick={() => setTitle("Başkan")}>Başkan</NavLink>
                    <NavLink className={"no-underline text-[#85dcee]"} to={url("homepage.Corporate.BoardOfDirectors")} onClick={() => setTitle("Yönetim Kurulu")}>Yönetim Kurulu</NavLink>
                    <NavLink className={"no-underline text-[#85dcee]"} to={url("homepage.Corporate.CorporateDocuments")} onClick={() => setTitle("Kurumsal Belgeler")}>Kurumsal Belgeler</NavLink>
                    <NavLink className={"no-underline text-[#85dcee]"} to={url("homepage.Corporate.OrganizationChart")} onClick={() => setTitle("Orginizasyon Şeması")}>Orginizasyon Şeması</NavLink>
                </div>
            </Container>
        </nav>
    )
}