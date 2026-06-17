import styles from './News.module.css'
import { CalendarEvent } from '@boxicons/react';
import { SchoolBus } from '@boxicons/react';
import { Florist } from '@boxicons/react';
import { Party } from '@boxicons/react';
import { Sneaker } from '@boxicons/react';
import { Computer } from '@boxicons/react';

export default function News(){
    return(
        <>
          <section className={styles.newsSection} id='news'>

            <div className={styles.title}>
                  <h2>News and Events</h2>
                  <div className={styles.titleLine}></div>
            </div>

            <div className={styles.gridBox}>
                <div className={styles.cardItem}>
                    <div className={styles.cardTitle}>
                      <h3>New School Term Begins</h3>
                      <SchoolBus className={styles.titleIcon}/>
                    </div>
                   
                   <p className={styles.cardContent}>We are excited to welcome our students back for a new school term. Our teachers have prepared engaging<br/>
                      lessons and activities to help every child learn, grow, and succeed. We look forward to another wonderful<br/>
                      term filled with learning and achievement.</p>
                      <div className={styles.date}>
                        <p>June 2026</p>
                        <CalendarEvent className={styles.icon}/>
                      </div>
                </div>

                <div className={styles.cardItem}>
                   <div className={styles.cardTitle}>
                      <h3>Students Celebrate Academic Success</h3>
                      <Party className={styles.titleIcon}/>
                    </div>
                   <p className={styles.cardContent}>We are proud of our students for their hard work and dedication throughout the term. Many learners achieved<br/>
                        excellent results and demonstrated remarkable progress in their studies.<br/>
                        Congratulations to all our students and teachers!</p>
                      <div className={styles.date}>
                        <p>May 2026</p>
                        <CalendarEvent className={styles.icon}/>
                      </div>
                </div>

                <div className={styles.cardItem}>
                    <div className={styles.cardTitle}>
                      <h3>School Garden Project Expands</h3>
                      <Florist className={styles.titleIcon}/>
                    </div>
                   <p className={styles.cardContent}>Our school garden continues to grow thanks to the efforts of students, teachers, and volunteers.<br/>
                       The project helps children learn about agriculture, teamwork, and environmental responsibility<br/>
                       while providing practical learning experiences.</p>
                      <div className={styles.date}>
                        <p>April 2026</p>
                        <CalendarEvent className={styles.icon}/>
                      </div>
                </div>

                <div className={styles.cardItem}>
                    <div className={styles.cardTitle}>
                      <h3>Sports Day Brings Students Together</h3>
                      <Sneaker className={styles.titleIcon}/>
                    </div>
                   <p className={styles.cardContent}>Students participated in a fun-filled Sports Day featuring football, running races,<br/>
                        and team competitions. The event promoted teamwork, healthy lifestyles, and school spirit while giving<br/>
                        learners an opportunity to showcase their talents.</p>
                      <div className={styles.date}>
                        <p>March 2026</p>
                        <CalendarEvent className={styles.icon}/>
                      </div>
                </div>

                <div className={styles.cardItem}>
                    <div className={styles.cardTitle}>
                      <h3>New Learning Resources Arrive</h3>
                      <Computer className={styles.titleIcon}/>
                    </div>
                   <p className={styles.cardContent}>Thanks to the generosity of our supporters and partners, Gate of Hope School has received new<br/>
                       educational materials and classroom resources. These additions will help improve the<br/>
                       learning experience for all students.</p>
                      <div className={styles.date}>
                        <p>February 2026</p>
                        <CalendarEvent className={styles.icon}/>
                      </div>
                </div>
            </div>
          </section>
        </>
    )
}