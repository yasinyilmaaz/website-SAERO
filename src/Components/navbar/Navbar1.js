import { Button, Container, Nav } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { url } from "../../routers/utils";
import { useTranslation } from "react-i18next";

export default function Navbar1() {
  const inputRef = useRef();
  const [language, setLanguage] = useState("TR");
  const [isOpen, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState("");
  const [hmenu, setHmenu] = useState();

  const { t, i18n } = useTranslation();
  

  const handleLanguage = () => {
    language == "TR" ? setLanguage("EN") : setLanguage("TR");
    i18n.changeLanguage(i18n.language === "en" ? "tr" : "en");
  };

  const handleInputClick = () => {
    inputRef.current.focus();
  };

  // sol menüdeki üstüne gelince yazılacak bilgiler
  const hamburgerText = [
    {
      name: "Corporate",
      text: "Türkiye Uzay Ajansı, uzay ve havacılık bilimi ve teknolojilerinin gelişimini ve yaygınlaştırılmasını destekleyici mahiyette finans, hukuk, yönetim, işletme, pazarlama ve benzeri konularda çalışmalar yapan Türkiye Cumhuriyetinin uzaya yönelik hak ve menfaatlerinin korunması ve güvence altına alınması için ulusal ve uluslararası kuruluşlarla koordinasyonu yürüten devlet kuruluşudur.",
      link: [],
    },
    {
      name: "Projects",
      text: "Türkiye Uzay Ajansı (TUA),uzay ve havacılık bilimi ve teknolojilerinde dışa bağımlılığı azaltmak, uluslararası alanda rekabet gücünü artırmak, bilimsel ve teknolojik altyapıyı oluşturmak ve her türlü yeni teknolojinin geliştirilmesi amacıyla Ar-Ge ve yüksek teknoloji girişimciliği destek programları hazırlamakla görevlidir.",
      link: [],
    },
    {
      name: "Education",
      text: "Millî Uzay Programı; önümüzdeki 10 yılı kapsayacak şekilde, ülkemizin uzay politikaları alanındaki vizyonu, stratejileri, hedefleri ve projelerini içermektedir.",
      link: [],
    },
    {
      name: "International",
      text: "Türkiye Uzay Ajansı (TUA), ülke genelinde uzay ve havacılık bilim ve teknolojilerine yönelik ilgi ve merakın geliştirilmesinde öncülük yapan; bu bağlamda Başkanlığımız ilgi ve faaliyet alanlarında her türlü iletişim ortamında içerik hazırlayan, etkinlikler gerçekleştiren, gerekli yayınları yapan ve bu amaca yönelik faaliyetleri destekleyen kamu kuruluşudur.",
      link: [],
    },
  ];

  // sol menüdeki hover olayını takip ediyor
  useEffect(() => {
    setHmenu(hamburgerText.filter((h) => h.name == isHovered));
  }, [isHovered]);

  return (
    <header>
      <nav className="bg-[#000000f5]  navbar ">
        <Container className="flex flex-nowrap justify-between items-center">
          <div className="flex items-center flex-row  z-10">
            <Hamburger toggled={isOpen} toggle={setOpen} />
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
          <div className="flex items-center gap-3  z-10">
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
            <div className="font-bold cursor-pointer" onClick={handleLanguage}>
              {language}
            </div>
            <a href="https://www.sakaryateknokent.com/">
              <img
                className="h-12 w-18"
                src="https://seeklogo.com/images/S/sakarya-teknokent-logo-8B8E534200-seeklogo.com.png"
              />
            </a>
          </div>
        </Container>
      </nav>
      <nav
        className={classNames({
          "hambugermenu": true,
          "hidden": isOpen == false,
        })}
      >
        <Container>
          <div className="hamburgers">
            <div className="hamburgerlink">
              <NavLink
                onClick={() => setOpen(false)}
                href="#"
                className="Homepage"
                to={url("homepage")}
              >
                {t("homepage")}
              </NavLink>
              <NavLink
                to={url("homepage.Corporate")}
                className="Corporate"
                onClick={() => setOpen(false)}
                onMouseEnter={() => setIsHovered("Corporate")}
                onMouseLeave={() => setIsHovered("")}
              >
                {t("Corporate")}
              </NavLink>
              <NavLink
                to={url("homepage.projects")}
                onClick={() => setOpen(false)}
                className="Projects"
                onMouseEnter={() => setIsHovered("Projects")}
                onMouseLeave={() => setIsHovered("")}
              >
                {t("Projects")}
              </NavLink>
              <NavLink
                to={url("homepage.Education")}
                onClick={() => setOpen(false)}
                className="Education"
                onMouseEnter={() => setIsHovered("Education")}
                onMouseLeave={() => setIsHovered("")}
              >
                {t("EducationandSocialAwareness")}
              </NavLink>
              <NavLink
                to={url("homepage.International")}
                onClick={() => setOpen(false)}
                className="International "
                onMouseEnter={() => setIsHovered("International")}
                onMouseLeave={() => setIsHovered("")}
              >
                {t("InternationalActivities")}
              </NavLink>
              <hr />
              <NavLink to={url("homepage.announcements")} className="duyurular ">
                {t("PressReleasesandAnnouncements")}
              </NavLink>
              <NavLink to={url("homepage.Events")} className="haberler ">
                {t("Events")}
              </NavLink>
              <NavLink to={url("homepage.sponsorship")} className="haberler ">
                {t("DonationandSponsorship")}
              </NavLink>
              <NavLink to={url("homepage.contact")} className="haberler ">
                {t("Contact")}
              </NavLink>
            </div>
            <div className="sociallinks ">
              <div className="flex gap-1  md:gap-3  flex-row">
                <div className="flex">
                  <a href="" className="sociallink">
                    {" "}
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 1000 1000"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      class=""
                    >
                      <path
                        d="M732.488 562.5l27.774-180.977H586.609V264.082c0-49.512 24.258-97.773 102.032-97.773h78.945V12.227S695.946 0 627.449 0C484.441 0 390.965 86.68 390.965 243.594v137.93H232V562.5h158.965V1000h195.644V562.5h145.88z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a href="" className="sociallink">
                    {" "}
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 1000 1000"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      class=""
                    >
                      <path
                        d="M897.21 296.41c.635 8.884.635 17.769.635 26.651 0 270.939-206.217 583.124-583.123 583.124-116.118 0-223.985-33.631-314.722-92.004 16.498 1.902 32.36 2.537 49.492 2.537 95.811 0 184.01-32.36 254.443-87.563-90.102-1.904-165.61-60.914-191.626-142.134 12.691 1.903 25.381 3.172 38.707 3.172 18.4 0 36.803-2.539 53.934-6.978C111.041 564.178 40.608 481.69 40.608 382.07v-2.537c27.283 15.229 59.012 24.747 92.639 26.014-55.204-36.803-91.37-99.62-91.37-170.686 0-38.07 10.15-72.97 27.918-103.426 100.89 124.365 252.54 205.583 422.59 214.467-3.172-15.228-5.076-31.09-5.076-46.953C487.309 186.004 578.68 94 692.259 94c59.01 0 112.309 24.746 149.746 64.721 46.319-8.883 90.735-26.016 130.077-49.492-15.23 47.59-47.59 87.564-90.102 112.943 41.244-4.44 81.22-15.863 118.02-31.724-27.914 40.607-62.815 76.773-102.79 105.963z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="flex">
                  <a href="" className="sociallink">
                    {" "}
                    <svg
                      aria-hidden="true"
                      data-prefix="fab"
                      data-icon="instagram"
                      class=""
                      viewBox="0 0 448 512"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      focusable="false"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </a>
                  <a href="" className="sociallink">
                    {" "}
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      class=""
                    >
                      <path d="M464 0H48C21.6 0 0 21.6 0 48v416c0 26.4 21.6 48 48 48h416c26.4 0 48-21.6 48-48V48c0-26.4-21.6-48-48-48zM192 416h-64V192h64v224zm-32-256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm256 256h-64V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v128h-64V192h64v39.7c13.2-18.1 33.4-39.7 56-39.7 39.8 0 72 35.8 72 80v144z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="hamburgertext">
            <Container>
              {hmenu?.map((menu) => (
                <div>{menu.text}</div>
              ))}
            </Container>
          </div>

          <div className="hamburgermenuinfo">
            <div>Saerotech</div>
            <div>{t("Copyright")}</div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
