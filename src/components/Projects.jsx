import React from 'react'
import styles from './projects.module.css'
import SectionIntroduction from './SectionIntroduction'
import todo from '../assets/ToDo-app-screenshot.png'
import apod from '../assets/APOD-app-screenshot.png'
import ImgOverlay from './ImgOverlay'

export default function Projects() {
  return (
    <section id="projects">
      <div className={styles.wrapper}>
        <SectionIntroduction >PROJECTS</SectionIntroduction>
        <div className={styles.sectionContent}>
          <ImgOverlay
            imgSrc={apod}
            title={"Astronomy Picture Of the Day Project"}
            projectLink={'https://apod-react-app-deeth.netlify.app/'}
            githubLink={'https://apod-react-app-deeth.netlify.app/'}>
            Uses Nasa's APOD API to automatically show daily image and display it along with its title and description each day.
          </ImgOverlay>
          <ImgOverlay
            imgSrc={todo}
            title={"Todo List"}
            projectLink={'https://reactjs-todos-deeth.netlify.app/'}
            githubLink={'https://reactjs-todos-deeth.netlify.app/'}>
            React based Todo List that saves your information Localy to be accessed later
          </ImgOverlay>
        </div>
      </div>
    </section>
  )
}