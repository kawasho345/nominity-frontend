import React from 'react'
import styles from "./Home.module.css"
import CreateScheduleButton from './createScheduleButton/CreateScheduleButton'

const Home = () => {
  return (
    <div className={ styles.content }>
        <CreateScheduleButton />
    </div>
  )
}

export default Home