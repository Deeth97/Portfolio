import React from 'react'
import styles from './aboutme.module.css'
import SectionIntroduction from './SectionIntroduction'

export default function Aboutme() {
    return (
        <section id="about-me" className={styles.aboutMe}>
            <div className={styles.wrapper}>
                <SectionIntroduction>ABOUT ME</SectionIntroduction>
                <div className={styles.sectionContent}>
                    <p className={styles.paragraph}>I am a <strong>Front End Developer</strong> with a passion for designing innovative websites with amazing aesthetics.</p>
                    <p className={styles.paragraph}>I was originally studying to become an <strong>Electronical Engineering</strong> but chose to pursue my passion for website development with a <strong>self-taught</strong> career change.</p>
                    <p className={styles.paragraph}>I have always wanted to make my own game so <strong>Software Development</strong> is excellent for allowing me to grow my <strong>Skills</strong> untill I can publish my own game.</p>
                    <p className={styles.paragraph}>I love to <strong>Socialise</strong> and catch up with my friends to play <strong>Board Games</strong> several times per week.</p>
                </div>
                <div className={styles.icons}>
                    <i className="fa-solid fa-dragon"></i>
                    <i className="fa-solid fa-dice"></i>
                    <i className="fa-solid fa-chess"></i>
                    <i className="fa-solid fa-users"></i>
                </div>
            </div>
        </section>
    )
}