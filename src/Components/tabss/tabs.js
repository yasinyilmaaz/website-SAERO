import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function tabbs() {

  var color = "white"

  
  function handleSelect(key) {
    console.log(color)
    switch (key) {
      case "home":
        color = "white"
        break;
      case "kurumsal":
        color = "#85dcee"
        break;
      case "projeler":
        color = "#e9bb7e"
        break;
      case "egitim":
        color = "#a595ff"
        break;
      case "ulusal":
        color = "#7ae4a0"
        break;
      default:
        color = "white"
        break;
    }
  }
  
  return (
    <div>
    <Tabs 
      defaultActiveKey={"home"}
      id="justify-tab-example"
      className="bg-[#000000f5] deger text-white"
      style={{"--color":color}}
      justify
      onSelect={handleSelect}
    >
      <Tab eventKey="home" title="00 Ana Sayfa">
          <div className="tabb">
                Tab content for Ana Sayfa
          </div>
      </Tab>
      <Tab  eventKey="kurumsal"  title="01 Kurumsal">
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