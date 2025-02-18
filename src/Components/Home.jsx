import React from 'react'
import Introduction from './Intoduction'
import Course from './Course'
import Teachers from './Teachers'
import AboutUs from './AboutUs'
import Questions from './Questions'
import Form from './Form'


function Home() {
  return (
    <div>
        <Introduction/>
        <Course/>
        <Teachers/>
        <AboutUs />
        <Questions/>
        <Form/>
    </div>
  )
}

export default Home
