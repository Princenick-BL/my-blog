import React from 'react'
import styles from './index.module.scss'
export default function Caroussel() {
    return (
        <div class={styles.carouselWrapper}>
            <div class={styles.carouselContainer}>
                <div class={styles.carousel}>
                    <div class={styles.imageOne}>
                        Article 1
                    </div>
                    <div class={styles.imageTwo}>
                        Article 2
                    </div>
                    <div class={styles.imageThree}>
                        Article 3
                    </div>
                </div>
            </div>
        </div>
    )
}
