import styles from './Footer.module.css'

export default function Footer(){
    return(
        <>
          <footer className={styles.footerSection}>
            <div className={styles.footerWrapper}>

                <div className={styles.footerTitle}>
                    <h2>Gate of Hope School</h2>
                    <p>Inspiring learning, shaping the future.</p>
                </div>

                <nav className={styles.nav}>
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <div className={styles.contactInfo}>
                    <h3>Contact</h3>
                    <p>Email: info@gateofhope.org</p>
                    <p>Phone: +254 XXX XXX XXX</p>
                    <p>Kenya</p>
                </div>

            </div>

            <div className={styles.footerCopyright}>
                <p>© 2026 Gate of Hope School. All rights reserved.</p>
            </div>
        </footer>
        </>
    )
}