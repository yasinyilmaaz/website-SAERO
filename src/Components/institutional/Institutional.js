import { Container } from "react-bootstrap";

export default function Institutional(){
    return(
        <div className="banner-home">
            <Container className="">
                <div className="banner-content">
                    <h1>Saerotech</h1>
                    <p>Türkiye Uzay Ajansı Aralık 2018 yılında 23 Sayılı Cumhurbaşkanlığı Kararnamesi ile Uzay ve havacılık bilimi ve teknolojilerine yönelik orta ve uzun vadeli amaçları, temel ilke ve yaklaşımları, hedef ve öncelikleri, performans ölçütlerini, bunlara ulaşmak için izlenecek yöntemler ile kaynak dağılımlarını belirlemek ve gereken uygulamaları yapmak için kurulmuş bir devlet kuruluşudur.</p>
                </div>
                <div className="flex flex-col gap-4">
                <hr className="h-1 border-t-2 border-t-white"/>
                <div className="text-white">
                    <div className="w-full flex justify-between flex-col md:flex-row">
                        <div className="h-1 font-bold text-lg">Misyon</div>
                        <div style={{"maxWidth":"75%"}}>Ülkemizin uzay alanında nitelikli insan kaynağını ve uzay ekosistemini hızla geliştirerek, gerektiğinde uluslararası iş birliklerini de değerlendirerek devletimizin uzay stratejisini verimli, güvenli ve sürdürülebilir şekilde gerçekleştirmek.</div>
                    </div>
                </div>
                <hr className="h-1 border-t-2 border-t-white"/>
                <div className="text-white">
                    <div className="w-full flex justify-between flex-col md:flex-row">
                        <div className="h-1 font-bold text-lg">Vizyon</div>
                        <div style={{"maxWidth":"75%"}}>Yeni Uzay Çağının gereklerine uygun şekilde, ülkemizin ve tüm insanlığın menfaatine olacak çalışmaları gerçekleştiren  öncü ve lider kurum olmak.</div>
                    </div>
                </div>
                </div>
            </Container>
        </div>
    )
}