import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function tabbs() {

  return (
    <div>
    <Tabs 
      defaultActiveKey={"home"}
      id="justify-tab-example"
      className="bg-[#000000f5] deger text-white"
      justify
    >
      <Tab eventKey="home" title="00 Ana Sayfa">
          <div className="tabb">
                Tab content for Ana Sayfa
          </div>
      </Tab>
      <Tab  eventKey="kurumsal" title="01 Kurumsal">

                  <div className="tabb">
                Tab content for kurumsal
                  </div>
      </Tab>
      <Tab eventKey="projeler" title="02 Projeler">
                 <div className="tabb">
                Tab content for Projeler
                 </div>
      </Tab>
      <Tab eventKey="egitim" title="03 Eğitim ve Sosyal">
                  <div className="tabb">
                Tab content for Eğitim
                   </div>
      </Tab>
      <Tab eventKey="ulusal" title="04 ulusal ve uluslararası">
                  <div className="tabb">
                Tab content for ulusal ve uluslararası
                  </div>
      </Tab>
    </Tabs>
    </div>
  );
}