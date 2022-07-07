import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import Loading from '../../Loading'
import { getTopStories } from '../../services/stories'
import { getArticle } from '../../services/articles'
import Image from 'next/image'
import Link from 'next/link'

export default function Caroussel() {
  return (
    <div className={styles.container}>
     
      {["Cars","Jewelry","House"].map((res,index)=>{
        return(
          <Link key={index} href={`/${res.toLowerCase()}`}>
            <a>
              <div className={styles.card} style={{backgroundImage:`url(${"https://picsum.photos/700/400"})`}}>
                <div className={styles.cat}>
                  {res.toUpperCase()}
                </div>
                <div className={styles.calc}>
                  <div className={styles.button}>Découvrir</div>
                </div>
              </div>
            </a>
          </Link>
        )
      })}
      
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
