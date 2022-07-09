import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import Loading from '../../Loading'
import { getTopStories } from '../../services/stories'
import { getArticle } from '../../services/articles'
import Image from 'next/image'
import Link from 'next/link'
import { categories } from '../../constants'



export default function Caroussel() {
  return (
    <div className={styles.container}>
      <div>
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
          <div className={styles.link}>
            Découvrir
          </div>
        </div>
      </div>
      {/* {categories.map((res,index)=>{
        return(
          <Link key={index} href={`/${res?.name?.toLowerCase()}`}>
            <a>
              <div className={styles.card} 
                style={{
                  backgroundImage:`url(/img/${res?.img})`
                }}
              >

                <div className={styles.cat}>
                  {res?.name?.toUpperCase()}
                </div>

                <div className={styles.calc}>
                  <div className={styles.button}>Découvrir</div>
                </div>

              </div>
            </a>
          </Link>
        )
      })} */}
      
    </div>
  )
}


// import React,{useState,useEffect} from 'react'
// import styles from './index.module.scss'
// import Loading from '../../Loading'
// import { getTopStories } from '../../services/stories'
// import { getArticle } from '../../services/articles'

// export default function StoriesWidget() {

//     const [stories,setStories] =  useState([])
//     useEffect(()=>{
//       (async ()=>{
//         const res = await getTopStories()
//         setStories(res.data)
//       })();
//     },[])

//     return (
//         <div classNameName={styles.list}>
//             {stories ? stories?.map((story,index)=>{
//               return(
//                   <a key={index} href={`/web-story/${story?._id}/${story?.slug}`} target={"_blank"} rel="noreferrer">
//                     <div  classNameName={styles.outerCorner}>
//                         <div 
//                             classNameName={styles.innerConner}
//                             style={{backgroundImage:`url(${story?.poster})`}}
//                         ></div>
//                     </div>

//                   </a>
                
//               )
//             }):(
//               <Loading/>
//             )}
            
//         </div>
//     )
// }
