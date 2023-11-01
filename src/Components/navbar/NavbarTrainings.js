export default function NavbarTrainings(){
    return(
        <nav className="bg-black text-[#a595ff] font-semibold text-base h-10 ">
            <Container className="flex justify-between h-10 items-center">
                <div>Eğitim ve Sosyal Farkındalık</div>
                <div className="flex gap-3">
                    <NavLink>Eğitim ve Sosyal Farkındalık</NavLink>
                    <NavLink>Eğitim Faliyetleri</NavLink>
                </div>
            </Container>
        </nav>
    )
}