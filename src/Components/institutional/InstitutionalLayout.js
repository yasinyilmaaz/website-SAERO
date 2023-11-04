import { Outlet } from "react-router-dom";
import NavbarInstiutional from "../navbar/NavbarInstiutional";
import Footer from '../footer/Footer'
export default function InstitutionalLayout() {
  return (
    <div>
      <NavbarInstiutional />
      <Outlet />
      <Footer/>
    </div>
  );
}
