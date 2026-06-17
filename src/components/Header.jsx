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
                   <li><a href='#home'>Home</a></li>
                   <li><a href='#about'>About Us</a></li>
                   <li><a href='#news'>News</a></li>
                   <li><a href='#contact'>Contact</a></li> 
                </ul>
            </nav>
         </section>
        </>
    )
}