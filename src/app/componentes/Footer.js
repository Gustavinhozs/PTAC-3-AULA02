import styles from "./footer.module.css"
import Imagem from "next/image"

export default function Footer(){
    return(
        <header className={styles.footer}>
            <a href="https://ead.ifms.edu.br/">
             <Imagem
          width={100}
          height={70}
        src= {"https://www.plataformaead.net/wp-content/uploads/2019/04/O-Moodle-e-gratuito.png"}/> 
    </a>
         <h1>Footer</h1>
          <nav>
            <ul>
                <li>Footer</li>
                <li>Registrar</li>
            </ul>
          </nav>
         </header>
    )
}