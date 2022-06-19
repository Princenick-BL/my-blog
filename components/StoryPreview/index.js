import React from 'react'
import styles from './index.module.scss'

export default function StoryPreview({url,img,title,logo}) {
  return (
    <div className={styles.storyPreview} style={{backgroundImage:`url(${img})`}}>
        <div className={styles.title}>{title}</div>
        <div className={styles.logo}></div>
    </div>
  )
}
