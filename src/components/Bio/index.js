import React from 'react'

import styles from './styles.css'

export default function Bio({ name, age, work }) {
  return (
    <div className={styles.bio}>
      Name: <h1>{name}</h1>
      Age: <h1>{age}</h1>
      Work: <h1>{work}</h1>
    </div>
  )
}
