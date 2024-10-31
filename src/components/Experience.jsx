import React from 'react'
import styles from './experience.module.css'
import ListEntry from './ListEntry'
import SectionIntroduction from './SectionIntroduction'

export default function Experience() {
  return (
    <section id="experience" >
      <div className={styles.wrapper}>
        <SectionIntroduction dark={true}>EXPERIENCE</SectionIntroduction>
        <div className={styles.sectionContent}>
          <ListEntry title={"Harvey Norman"} date={"Oct 2023 - Present"}>
            <li>Hardware Manager responible for managing sales team, training, staying up to date on latest technology, whilest also remaining a top sales person. Recieved training from top sales team at the highest revenue producing Harvey Norman store in the world.</li>
          </ListEntry>
          <ListEntry title={"I Will Build Agency"} date={"Apr 2020 - Oct 2023"}>
            <li>Lead website developer responsible for onboarding, handover and team management. During this time I watched several start-ups turn into multi-million dollar businesses.</li>
          </ListEntry>
          <ListEntry title={"I Will Import"} date={"July 2016 - Apr 2020"}>
            <li>Assisted in teaching people how to import from China and what to do with the stock, including building website for them.</li>
          </ListEntry>
          <ListEntry title={"Will Be Fun"} date={"June 2015 - Dec 2019"}>
            <li>Started my own buisness when I was a Teenager selling kids toys; Built and ran my own shopify store which ended up producing 6 figures in revenue.</li>
          </ListEntry>
        </div>

      </div>
    </section>
  )
}