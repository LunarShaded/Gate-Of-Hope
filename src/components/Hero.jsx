import styles from './Hero.module.css'
import img from '/src/img/gateofhope.jpg'

export default function Hero(){
    return(
        <>
          <section className={styles.heroSection} id='home'>
            <div className={styles.heroContent}>
              <h2>Opening the Gate to a Brighter Future</h2>
              <p>At Gate of Hope School, we believe every child deserves access to quality education,<br/>
                 a safe learning environment, and opportunities to achieve their dreams. Through knowledge, <br/>
                 compassion, and community support, we help shape confident and responsible future leaders.</p>

              <a href='#' className={styles.btn}>Learn More</a>
            </div>

            <div className={styles.heroImg}>
              <img src={img} alt='Gate of hope' className={styles.img}></img>
            </div>
          </section>
        </>
    )
}