import styles from './Contact.module.css'
import { Envelope } from '@boxicons/react';
import { Phone } from '@boxicons/react';


export default function Contact(){
    return(
        <>
         <section className={styles.contactSection}>
            <div className={styles.contactBox}>
                <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.564438393584!2d30.56845587447387!3d0.6463671634341598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1763b7761865070f%3A0x17057b5236ab0362!2sGate%20of%20Hope%20Education%20Centre!5e0!3m2!1sru!2spl!4v1781340241759!5m2!1sru!2spl" 
                   className={styles.map}>
                </iframe>

                <form className={styles.contactForm}>
                   <div className={styles.topSection}>
                     <div className={styles.item}>
                        <label>Firstname:</label>
                        <input type='text' placeholder='Jon' className={styles.input} required></input>
                     </div>

                     <div className={styles.item}>
                        <label>Secondname:</label>
                        <input type='text' placeholder='Smith' className={styles.input} required></input>
                     </div>

                     <div className={styles.item}>
                        <label>Email:</label>
                        <input type='text' placeholder='example@mail.com' className={styles.input} required></input>
                     </div>

                     <div className={styles.item}>
                        <label>Phone:</label>
                        <input type='text' placeholder='+xxx-xxx-xxx' className={styles.input} required></input>
                     </div>
                   </div>

                   <div className={styles.bottomSection}>
                     <textarea className={styles.textArea}></textarea>
                     <button className={styles.btn}>Send</button>
                   </div>
                </form>
            </div>
          
         </section>
        </>
    )
}