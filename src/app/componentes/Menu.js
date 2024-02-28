import Link from "next/link";
import styles from "./menu.module.css"
import Image from "next/image";

export default function Menu(){
    return(
        <header className={styles.cabecalho}>
          <image
          width={100}
          height={100}
        src= {"https://e1.pxfuel.com/desktop-wallpaper/615/540/desktop-wallpaper-the-joker-joker-cartoon.jpg"} />  
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