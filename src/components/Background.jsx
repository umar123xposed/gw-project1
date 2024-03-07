import React from 'react'
import styles from "./../Background.module.css"

const Background = (props) => {
  return (
    <div className={`${styles.container} container my-5`}>
      <h1 className={`${styles.color} text-center`}>{props.heading}</h1>
      <p className={`${styles.color} text-center`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex deleniti minus quo autem vitae, quis aliquid. Iusto tempora velit maiores quasi cum doloremque officia libero!
      </p>
    </div>
  )
}

export default Background
