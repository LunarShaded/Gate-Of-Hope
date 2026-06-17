import styles from './AboutHero.module.css'
import { EyeAlt } from '@boxicons/react';
import { Rocket } from '@boxicons/react';
import { DonateHeart } from '@boxicons/react';

export default function AboutHero(){
    return(
        <>
         <section className={styles.aboutSection} id='about'>
             <div className={styles.title}>
                  <h2>About Us</h2>
                  <div className={styles.titleLine}></div>
             </div>
            <div className={styles.heroContent}>
              <div className={styles.heroStory}>
                <h3>About Gate of Hope</h3>
                <ul>

                    <li><p>Gate of Hope School is a community-focused educational institution in Uganda dedicated to empowering children through quality education,<br/> 
                           character development, and a supportive learning environment.<br/> 
                           We believe that every child has unique potential, and our mission is to help students discover their talents,<br/> 
                           build confidence, and prepare for a successful future.</p>
                    </li>

                    <li>
                        <p>Our dedicated teachers work closely with students to provide academic excellence while promoting values such as respect,<br/>
                           responsibility, integrity, and compassion. Beyond the classroom, we encourage creativity, teamwork,<br/>
                           and personal growth through a variety of activities and programs.</p>
                    </li>

                    <li>
                        <p>At Gate of Hope School, we strive to create a safe and welcoming environment where every child feels valued,<br/>
                           inspired, and motivated to learn. Together with families and the community,<br/>
                            we are building a brighter future—one student at a time.</p>
                    </li>

                </ul>
              </div>

              <div className={styles.heroGoals}>
                <div className={styles.heroVisionWrapper}>
                  <EyeAlt className={styles.iconGoals}/>
               
                   <div className={styles.heroVision}>
                    <h3>Our Vision</h3>
                    <p>To provide every child with the opportunity to learn,<br/> grow, and become a positive force in their community.</p>
                   </div>

                </div>

                <div className={styles.heroMissionWrapper}>
                  <Rocket className={styles.iconGoals}/>
                   <div className={styles.heroMission}>
                     <h3>Our Mission</h3>
                     <p>To deliver quality education, nurture strong character,<br/> and inspire lifelong learning in a caring and inclusive environment.</p>
                   </div>

                </div>
              </div>
            </div>

            <div className={styles.heroCard}>
              <div className={styles.cardWrapper}>
                <DonateHeart className={styles.cardIcon}/>
                 <p>Founded with the support of Polish missionaries and donors, Gate of Hope School has become a place<br/>
                    where children in Uganda can access quality education, develop their talents,<br/>
                    and build a brighter future. Through the dedication of local educators, volunteers,<br/>
                    and international partners, the school continues to provide hope and opportunity to the community.</p>
              </div>
            </div>
         </section>
        </>
    )
}