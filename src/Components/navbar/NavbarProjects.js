import { useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { url } from "../../routers/utils";

export default function NavbarProjects() {
  const [title, setTitle] = useState("Projeler");
  return (
    <nav className="bg-black sticky top-0 text-[#e9bb7e] font-semibold text-base h-10 border-t border-t-[#e9bb7e]">
      <Container className="flex justify-between h-10 items-center">
        <div>{title}</div>
        <div className="flex gap-3">
          <NavLink
            className={"no-underline text-[#e9bb7e]"}
            onClick={() => setTitle("Projeler")}
            to={url("homepage.projects")}
          >
            Projeler
          </NavLink>
          <NavLink
            className={"no-underline text-[#e9bb7e]"}
            onClick={() => setTitle("Yürütülen Projeler")}
            to={url("homepage.projects.OnGoingProjects")}
          >
            Yürütülen Projeler
          </NavLink>
          <NavLink
            className={"no-underline text-[#e9bb7e]"}
            onClick={() => setTitle("Diğer Projeler")}
            to={url("homepage.projects.OtherProjects")}
          >
            Diğer Projeler
          </NavLink>
        </div>
      </Container>
    </nav>
  );
}
