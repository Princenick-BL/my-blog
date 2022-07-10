import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import Loading from '../../Loading'
import { getTopStories } from '../../services/stories'
import { getArticle } from '../../services/articles'
import Image from 'next/image'
import Link from 'next/link'
import { categories } from '../../constants'

import Carousel from 'react-material-ui-carousel'


export default function Example(props){

  return (

      <Carousel className={styles.container} > 
        {categories.map((res,index)=>{
        return (
          <div className={styles.box}  key={index}>
            <div className={styles.img}>
              <Image
                src={`/img/${res?.img}`}
                width={700}
                height={700 * 3 / 4}
                layout="responsive"
              />
            </div>
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
  )
}
