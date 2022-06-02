import React from 'react'
import styles from './index.module.scss'
export default function Header() {
  return (
    <div>Header</div>
  )
}

export function ArticleHeader(){
    return(
        <header className={styles.articleHeader}>
            <nav>
                <div className={styles.logo}>logo</div>
                <ul>
                    {/* <li>menu1</li>
                    <li>menu2</li>
                    <li>menu3</li> */}
                </ul>
                <div className={styles.logo}>logo</div>
            </nav>   
        </header>
    )
}