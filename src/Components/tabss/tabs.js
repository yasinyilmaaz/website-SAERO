import { Button, Container } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Breadcrumb() {
  return (
    <div>
    <Tabs
      defaultActiveKey="home"
      id="justify-tab-example"
      className="bg-[#000000f5] text-white navbar mb-3"
      justify
    >
      <Tab eventKey="home" title="00 Ana Sayfa">
               
     görsel component
     

      </Tab>
      <Tab eventKey="kurumsal" title="01 Kurumsal">
        gdf
      </Tab>
      <Tab eventKey="projeler" title="02 Projeler">
        gdfg
      </Tab>
      <Tab eventKey="egitim" title="03 Eğitim ve Sosyal">
        gdf
      </Tab>
      <Tab eventKey="ulusal" title="04 ulusal ve uluslararası">
        gdf
      </Tab>
    </Tabs>
    </div>
  );
}