import Link from "next/link";
import styles from "./menu.module.css"
import Imagem from "next/image";

export default function Menu(){
    return(
        <header className={styles.cabecalho}>
          <Imagem
          width={100}
          height={70}
        src= {"https://www.ifms.edu.br/marcaifms.png"}/> 
         <h1>Menu</h1>
          <nav>
            <ul>
                <Link href="/">
                <li>Home</li>
                </Link>

                <Link href="/registro">
                <li>Registrar</li>
               </Link>

            </ul>
          </nav>
         </header>
    )
}