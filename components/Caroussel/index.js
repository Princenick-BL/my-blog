import React from 'react'
import styles from './index.module.scss'
export default function Caroussel() {
    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.carouselContainer}>
                <div className={styles.carousel}>
                    <div className={styles.imageOne}>
                        Article 1
                    </div>
                    <div className={styles.imageTwo}>
                        Article 2
                    </div>
                    <div className={styles.imageThree}>
                        Article 3
                    </div>
                </div>
            </div>
        </div>
    )
}
