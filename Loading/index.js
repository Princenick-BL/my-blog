import React from 'react'
import styles from './index.module.scss'

export default function Loading() {
  return (
    <div className={styles.loading}>
        <svg  style={{margin: "auto", background: "rgb(255, 255, 255)", display: "block", shapeRendering: "auto"}} width="40px" height="40px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" fill="none" stroke="var(--color-primary-light)" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
            </circle>
        </svg>
    </div>
  )
}
