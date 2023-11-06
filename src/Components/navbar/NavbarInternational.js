import { useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { url } from "../../routers/utils";

export default function NavbarInternational() {
  const [title, setTitle] = useState("Ulusal ve Uluslararası Faliyetler");
  return (
    <nav className="bg-black text-[#7ae4a0] font-semibold text-base h-10 sticky top-0  border-t border-t-[#7ae4a0]">
      <Container className="flex justify-between h-10 items-center">
        <div>{title}</div>
        <div className="flex gap-3">
          <NavLink
            className={"no-underline text-[#7ae4a0]"}
            onClick={() => setTitle("Ulusal ve Uluslararası Faliyetler")}
            to={url("homepage.International")}
          >
            Ulusal ve Uluslararası Faliyetler
          </NavLink>
          <NavLink
            className={"no-underline text-[#7ae4a0]"}
            onClick={() => setTitle("Ulusal İşbirliği")}
            to={url("homepage.International.InternationalCooperation")}
          >
            Ulusal İşbirliği
          </NavLink>
          <NavLink
            className={"no-underline text-[#7ae4a0]"}
            onClick={() => setTitle("Ululararası İşbirliği")}
            to={url("homepage.International.NationalCooperation")}
          >
            Ululararası İşbirliği
          </NavLink>
        </div>
      </Container>
    </nav>
  );
}
