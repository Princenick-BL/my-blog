import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import Loading from '../../Loading'
import { getTopStories } from '../../services/stories'
import { getArticle } from '../../services/articles'
import Image from 'next/image'
import Link from 'next/link'
import { categories } from '../../constants'
import { Carousel } from 'react-responsive-carousel';



export default function Caroussel() {
  return (
    <div className={styles.container}>
      <Carousel
       
      >

        {categories.map((res,index)=>{
          return (
            <div style={{minHeight:"500px"}} key={index}>
              <Image
                src={`/img/${res?.img}`}
                width={700}
                height={700 * 9 / 16}
              />
              <div className={styles.info}>
                <h1 className={styles.cat}>
                  {res?.name?.toUpperCase()}
                </h1>
                <p>
                  {res?.description}
                </p>
                <div className={styles.link}>
                  Découvrir
                </div>
              </div>
            </div>
            
          )
        })}
      </Carousel>
      {/* <div>
        <Image
          src={`/img/${categories[0]?.img}`}
          width={700}
          height={700 * 9 / 16}
        />
        <div className={styles.info}>
          <h1 className={styles.cat}>
            {categories[0]?.name?.toUpperCase()}
          </h1>
          <p>
            {categories[0]?.description}
          </p>
          <Link href={categories[0]?.name?.toLocaleLowerCase()}>
            <a>
              <div className={styles.link}>
                Découvrir
              </div>
            </a>
          </Link>
        </div>
      </div>       */}
    </div>
  )
}

