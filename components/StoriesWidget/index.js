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
          <div style={{height:"max-content",paddingBottom:"50px"}}  key={index}>
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
  )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

// export default function Caroussel() {
//   return (
//     <div className={styles.container} style={{height:"max-content"}}>
    

//         {/* {categories.map((res,index)=>{
//           return (
//             <div style={{height:"max-content",paddingBottom:"50px"}}  key={index}>
//               <Image
//                 src={`/img/${res?.img}`}
//                 width={700}
//                 height={700 * 9 / 16}
//               />
//               <div className={styles.info}>
//                 <h1 className={styles.cat}>
//                   {res?.name?.toUpperCase()}
//                 </h1>
//                 <p>
//                   {res?.description}
//                 </p>
//                 <div className={styles.link}>
//                   Découvrir
//                 </div>
//               </div>
//             </div>
            
//           )
//         })} */}
        
     
//     </div>
//   )
// }

