import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function tabbs() {
  return (
    <div>
      <Tabs
        defaultActiveKey={"home"}
        id="justify-tab-example"
        className="bg-[#000000f5] deger text-white z-10"
        justify
      >
        <Tab eventKey="home" title="00 Ana Sayfa">
          <div className="tabb">
            <Container className="mt-8 text-5xl">
              <div>Geleceğin</div>
              <div>Başladığı Yer</div>
            </Container>
          </div>
        </Tab>
        <Tab eventKey="kurumsal" title="01 Kurumsal">
          <div className="tabb">
            <Container className="mt-8  flex">
              <div className="col-3 text-5xl">Kurumsal</div>
              <div className="col-9">Türkiye Uzay Ajansı (TUA); uzay ve havacılık bilimi ve teknolojilerine yönelik orta ve uzun vadeli amaçları, temel ilke ve yaklaşımları, hedef ve öncelikleri, performans ölçütlerini, bunlara ulaşmak için izlenecek yöntemler ile kaynak dağılımlarını da içeren stratejik planlar hazırlamakla görevli devlet kuruluşudur. Yer</div>
            </Container>
          </div>
        </Tab>
        <Tab eventKey="projeler" title="02 Projeler">
        <div className="tabb">
            <Container className="mt-8 flex">
            <div className="col-3 text-5xl">Projeler</div>
              <div className="col-9">Türkiye Uzay Ajansı (TUA),uzay ve havacılık bilimi ve teknolojilerinde dışa bağımlılığı azaltmak, uluslararası alanda rekabet gücünü artırmak, bilimsel ve teknolojik altyapıyı oluşturmak ve her türlü yeni teknolojinin geliştirilmesi amacıyla Ar-Ge ve yüksek teknoloji girişimciliği destek programları hazırlamakla görevlidir.</div>
            </Container>
          </div>
        </Tab>
        <Tab eventKey="egitim" title="03 Eğitim ve Sosyal">
        <div className="tabb">
            <Container className="mt-8 flex">
            <div className="col-3 text-5xl">Eğitim ve Sosyal Farkındalık</div>
              <div className="col-9">Türkiye Uzay Ajansı (TUA),uzay ve havacılık bilimi ve teknolojilerinde dışa bağımlılığı azaltmak, uluslararası alanda rekabet gücünü artırmak, bilimsel ve teknolojik altyapıyı oluşturmak ve her türlü yeni teknolojinin geliştirilmesi amacıyla Ar-Ge ve yüksek teknoloji girişimciliği destek programları hazırlamakla görevlidir.</div>
            </Container>
          </div>
        </Tab>
        <Tab eventKey="ulusal" title="04 ulusal ve uluslararası">
        <div className="tabb">
            <Container className="mt-8 flex">
            <div className="col-3 text-5xl">UluslarArası Faliyetler</div>
              <div className="col-9">Türkiye Uzay Ajansı (TUA),uzay ve havacılık bilimi ve teknolojilerinde dışa bağımlılığı azaltmak, uluslararası alanda rekabet gücünü artırmak, bilimsel ve teknolojik altyapıyı oluşturmak ve her türlü yeni teknolojinin geliştirilmesi amacıyla Ar-Ge ve yüksek teknoloji girişimciliği destek programları hazırlamakla görevlidir.</div>
            </Container>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
