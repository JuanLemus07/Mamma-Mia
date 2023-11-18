import { BsTwitterX } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Footer () {

  return(
    <>
    <footer className="footer">
      <div className="follow">
        <h4>Siguenos en nuestras redes:</h4>
        <div><a href="#"><BsFacebook/></a><a href="#"><BsInstagram/></a><a href="#"><BsTwitterX /></a><a href="#"><BsTelegram /></a></div>
      </div>
      <h4>Pizzeria Mamma Mia © 2023 . Todos los derechos reservados</h4>
      </footer>  
    </>
    
  )
}

export default Footer
