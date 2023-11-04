import { useState } from "react"
import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"


export default function NavbarTrainings(){
    const [title, setTitle] = useState("Eğitim ve Sosyal Farkındalık")
    return(
        <nav className="bg-black text-[#a595ff] font-semibold text-base h-10 sticky top-0  border-t border-t-[#a595ff]">
            <Container className="flex justify-between h-10 items-center">
                <div>{title}</div>
                <div className="flex gap-3">
                    <NavLink  className={"no-underline text-[#a595ff]"} onClick={() => setTitle("Eğitim ve Sosyal Farkındalık")}>Eğitim ve Sosyal Farkındalık</NavLink>
                    <NavLink  className={"no-underline text-[#a595ff]"} onClick={() => setTitle("Eğitim Faliyetleri")}>Eğitim Faliyetleri</NavLink>
                </div>
            </Container>
        </nav>
    )
}