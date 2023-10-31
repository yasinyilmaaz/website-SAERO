import { Container } from "react-bootstrap";

export default function Navbar1() {
  return (
    <nav className="h-[60px] bg-[#000000f5] text-white navbar">
      <Container className="flex justify-between items-center">
        <div className="flex items-center flex-row">
        <div></div>
          <a href="#" className="h-8">
          <figure >
            <img
              src="https://tua.gov.tr/images/tua-logo-tr.svg"
              alt="Saerotech"
              className="h-8"
            />
          </figure>
          </a>
        </div>
        <div>degerler</div>
      </Container>
    </nav>
  );
}
