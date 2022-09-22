import React from 'react'
import "materialize-css/dist/css/materialize.min.css";
import { MenuResponsive } from './utilsNav/menuResponsive';
import logo from "../../assets/img/logo.jpeg";
import {Dropdown} from "./utilsNav/dropdown";
import CartWidget from "../Cartwidget/CartWidget";



const FormatoNav = () => {

    return (
        <>
{/* ---formato del nav-- */}
            <div className="navbar-fixed ">
              <nav  style={style.estilosNav}>
                <div className="nav-wrapper" style={style.alinecion}>
                  <img src={logo} alt="logo" className="brand-logo center" style={style.estilosImagen}/> 
                  <a  href="#!" data-target="mobile-demo" className="sidenav-trigger "  ><MenuResponsive/></a> 
                  <ul className="right hide-on-med-and-down">
                    <li><a  style={style.esitlosLetras} href="index.html">Inicio</a></li>
                    <li><a style={style.esitlosLetras}  href="#!">Sobre Nosotros</a></li>
                    <li style={style.esitlosLetras}><Dropdown/></li>
                    <li style={style.esitlosLetras}> <CartWidget /></li>
                  </ul>
                </div>
              </nav>
            </div>
        </>
    );
}

const style = {
  estilosNav:{
    height: "135px",
    backgroundColor: "#00416a",
  },
  estilosImagen:{
    height: "inherit",
    borderRadius: "30px",
  },
  esitlosLetras:{
    fontSize: "1.3rem",
    paddingLeft:"10px",
  },
  alinecion:{
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
  },
  
};




export default FormatoNav