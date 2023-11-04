import { Container } from "react-bootstrap"


export default function Trainimgs(){
    return(
        <div className="banner-home">
            <Container className="">
                <div className="banner-content">
                    <h1>Eğitim ve Sosyal Farkındalık</h1>
                    <p>TUA uzay ve havacılık ile ilgili eğitim kaynakları ile TUA'nın teknolojik, bilimsel hedefleri hakkındaki bilgilere buradan ulaşılabilir. Web sitemizde yer alacak materyaller ve çeşitli kaynaklar aracılığıyla öğrenciler, eğitimciler, ebeveynler ve halkımızın bilgilendirilmesi hedeflenmektedir.</p>
                </div>
                <div className="flex flex-col gap-4">
                <div className="text-white">
                    <div className="w-full flex justify-between flex-col md:flex-row">
                        <div className="h-1 font-bold text-lg">Eğitim ve Sosyal Farkındalık</div>
                        <div style={{"maxWidth":"75%"}}>TUA uzay ve havacılık ile ilgili eğitim kaynakları ile TUA'nın teknolojik, bilimsel hedefleri hakkındaki bilgilere buradan ulaşılabilir. Web sitemizde yer alacak materyaller ve çeşitli kaynaklar aracılığıyla öğrenciler, eğitimciler, ebeveynler ve halkımızın bilgilendirilmesi hedeflenmektedir.</div>
                    </div>
                </div>
                <hr className="h-1 border-t-2 border-t-white"/>

                </div>
            </Container>
        </div>
    )
}