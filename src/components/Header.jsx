import styles from './Header.module.css'
import { Arch } from '@boxicons/react';

export default function Header(){
    return(
        <>
         <section className={styles.headerSection}>
            <div className={styles.logo}>
                <Arch className={styles.logoIcon}/>
                <h2>Gate of Hope</h2>
            </div>

            <nav className={styles.nav}>
                <ul>
                   <li><a href='#'>Home</a></li>
                   <li><a href='#'>About Us</a></li>
                   <li><a href='#'>News</a></li>
                   <li><a href='#'>Contact</a></li> 
                </ul>
            </nav>
         </section>
        </>
    )
}