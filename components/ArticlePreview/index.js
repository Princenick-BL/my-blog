import React from 'react'
import Image from 'next/image'
import styles from './index.module.scss'

export default function ArticlePreview({url,img,test,category,odd}) {

  return (
      <a target={"_blank"} rel="noreferrer" href={url}>
        <div className={styles.card+ " "+ (odd ? styles.odd : styles.notOdd)}>
            <div className={styles.img}>
                <Image
                 src={img}
                 width={100}
                 height={100}
                 layout='responsive'
                 alt='img'/>
            </div>
            <div className={styles.descs}>
                <div className={styles.textWithColor}>
                  <div className={styles.color}></div>
                  <span>{category}</span>
                </div>
                <h3>{test}</h3>
                <span>{}</span>
            </div>
        </div>
      </a>
  )
}
