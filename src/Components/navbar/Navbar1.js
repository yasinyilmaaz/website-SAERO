import { Button, Container } from "react-bootstrap";
import React, { useRef,useState } from "react";

export default function Navbar1() {
  const inputRef = useRef();
  const [language, setLanguage] = useState("TR")

  const handleInputClick = () => {
    inputRef.current.focus();
  };

  return (
    <nav className="bg-[#000000f5] text-white navbar">
      <Container className="flex flex-nowrap justify-between items-center">
        <div className="flex items-center flex-row">
          <div className="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <a href="#" className="h-8">
            <figure>
              <img
                src="https://tua.gov.tr/images/tua-logo-tr.svg"
                alt="Saerotech"
                className="h-8"
              />
            </figure>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div className=" flex gap-2">
            <input
              ref={inputRef}
              type="text"
              className="bg-[#00000000] w-20 border-0 p-0 focus:border-primary rounded-md text-right outline-none"
            />
            <button
              role="img"
              aria-label="search"
              onClick={handleInputClick}
              tabindex="-1"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="search"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
              </svg>
            </button>
          </div>
          <div className="font-bold cursor-pointer" onClick={() => language=="TR"?setLanguage("EN"):setLanguage("TR")}>{language}</div>
          <a href="https://www.sakaryateknokent.com/">
            <img
              className="h-12 w-18"
              src="https://seeklogo.com/images/S/sakarya-teknokent-logo-8B8E534200-seeklogo.com.png"
            />
          </a>
        </div>
      </Container>
    </nav>
  );
}