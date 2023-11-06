import { useState } from "react"
import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { url } from "../../routers/utils"


export default function NavbarTrainings(){
    const [title, setTitle] = useState("Eğitim ve Sosyal Farkındalık")
    return(
        <nav className="bg-black text-[#a595ff] font-semibold text-base h-10 sticky top-0  border-t border-t-[#a595ff]">
            <Container className="flex justify-between h-10 items-center">
                <div>{title}</div>
                <div className="flex gap-3">
                    <NavLink  className={"no-underline text-[#a595ff]"} onClick={() => setTitle("Eğitim ve Sosyal Farkındalık")} to={url("homepage.Education")}>Eğitim ve Sosyal Farkındalık</NavLink>
                    <NavLink  className={"no-underline text-[#a595ff]"} onClick={() => setTitle("Eğitim Faliyetleri")} to={url("homepage.Education.EducationalActivities")}>Eğitim Faliyetleri</NavLink>
                    <NavLink  className={"no-underline text-[#a595ff]"} onClick={() => setTitle("Astronomik Olaylar")} to={url("homepage.Education.AstronomicalEvents")}>Astronomik Olaylar</NavLink>
                    <NavLink  className={"no-underline text-[#a595ff]"} onClick={() => setTitle("Blog")} to={url("homepage.Education.Blog")}>Blog</NavLink>
                </div>
            </Container>
        </nav>
    )
}