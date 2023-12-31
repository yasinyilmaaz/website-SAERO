import { useState } from "react";
import Tabs from "./tabss/tabs";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [openChat, setOpenChat] = useState(false)

  const handleChat = ()=>{
        setOpenChat(!openChat)
  }

  return (
    <div>
      <Tabs t={t}/>
      {/* Sosyal medya linkleri */}
      <div className="sociallink-home">
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
            {/* instagram */}
            <a href="https://www.instagram.com/_saerotech/" className="sociallink">
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
      <div className="chat fixed text-white bottom-8 right-8" onClick={handleChat}>
        <span role="img" class="anticon" style={{ fontSize: "25px" }}>
          <svg
            width="0.7em"
            height="0.7em"
            viewBox="0 0 18 17"
            aria-hidden="true"
            focusable="false"
            className=""
          >
            <path
              d="M4.428 12.189H3.286C2.024 12.189 1 11.187 1 9.95V3.238C1 2.002 2.024 1 3.286 1h11.429C15.977 1 17 2.002 17 3.238V9.95c0 1.236-1.023 2.238-2.285 2.238H7.856c0 1.853-1.534 3.357-3.427 3.357l-.001-3.357z"
              stroke="#fff"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
      </div>
      {/* Açılan kutu */}
      <form className={classNames({
        "chatbox":true,
        "hidden ":openChat==false
      })}> 
        <div className="w-full text-right font-bold text-lg hover:cursor-pointer" onClick={() => setOpenChat(false)}>X</div>
        <h4>AD SOYAD</h4>
        <input type="text" className="chatinput"/>
        <h4>EMAIL</h4>
        <input type="email" className="chatinput"/>
        <h4>MESAJINIZ</h4>
        <textarea className="chatinput"/>

        <button className="chatbutton border-gray-600 border-1 px-3 py-2 ">Gönder</button>

      </form>
    </div>
  );
}
