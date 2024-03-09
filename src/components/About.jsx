import React from 'react'
import styles from "./../About.module.css"

const About = () => {
  return (
<>
    <header>
    <h1>About Us</h1>
  </header>
    <div className={styles.container}> 
    <div className={`${styles.content} text-white`}> 
      <h2>Welcome to Geeksvisor!</h2>
      <p>We are passionate about technology and innovation. Geeksvisor is a platform where we explore the latest trends in the tech industry and share our knowledge with fellow enthusiasts.</p>
      <p>Project 1 is one of our initiatives created by Umar. It's built using React.js, a popular JavaScript library for building user interfaces.</p>
      <p>React allows us to create dynamic and interactive web applications with ease. Its component-based architecture promotes code reusability and maintainability, making it an ideal choice for modern web development.</p>
      <img src="https://www.unicorn.dev/wp-content/uploads/2023/01/react.png" alt="React.js Logo" className={styles.logo}/>
      <p>By leveraging the power of React, we strive to deliver innovative solutions and delightful user experiences to our audience.</p>
    </div>
    </div>
    </>
  )
}

export default About
