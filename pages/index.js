import React,{useState,useEffect,Suspense}  from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import ArticlePreview from '../components/ArticlePreview'
import StoryPreview from '../components/StoryPreview'
import { getTopArticles } from '../services/articles'
import { getTopStories,getStories } from '../services/stories'
import {
  FireOutlined,
  TabletOutlined
} from '@ant-design/icons';
import BlogHead from '../components/BlogHead'
import {ArticleHeader} from '../components/Header'
import {HomeMenu as Menu} from '../components/Menu'
import Loading from '../Loading'
import StoriesWidget from '../components/StoriesWidget'
import PlayerWidget from '../components/PlayerWidget'
import { useRouter } from 'next/router'
import Script from 'next/script'
import * as gtag from '../lib/gtag'
import Link from 'next/link'
import {useGlobalContext} from '../GlobalContext'
import {THEME} from '../constants'
import TopicCluster from '../components/TopicCluster'



export default function Home() {

  const [articles,setArticles] =  useState([])
  const [stories,setStories] =  useState([])
  const [stories1,setStories1] =  useState([])
  const [stories2,setStories2] =  useState([])
  const router = useRouter()
  const {state,dispatch} = useGlobalContext()


  useEffect(()=>{
    (async ()=>{
      const res = await getTopArticles()
      setArticles(res.data)
      const res2 = await getStories()
      setStories(res2.data)
    })();
  },[])

  useEffect(()=>{
    var first = stories.slice(0, 2);
    var second = stories.slice(3);
    setStories1(first)
    setStories2(second)
  },[stories])


  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  return (
    <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Inconsolata|Montserrat:400,500,600,700|Crimson+Text:400,600" rel="stylesheet"></link>
        </Head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <div className={ styles.containerLight }>
          <Menu/>
          <main className={styles.main}>
            <div className={styles.articles}>
              {/* <StoriesWidget/> */}
              <TopicCluster/>
              {/* <br></br>
              <input className={"searchInput"} type={"search"} placeholder='Search ...'/>
              <br></br> */}
              <div className={styles.flex}>
                <h3 className={styles.h3}> <FireOutlined /> &nbsp;  RECENT STORIES</h3>
              </div>
              <div className={styles.articleList}>
                {articles && articles.length >0 ? articles?.map((article,index)=>{
                  return(
                    <ArticlePreview
                      key={index}
                      odd = {index%2 === 0}
                      img={article?.poster}
                      category={article?.category}
                      title={article?.title}
                      url={`/${article.category.toLowerCase()}/article/${article?._id}/${article?.slug}`}
                      updatedAt = {article?.updatedAt}
                      description = {article?.description}
                    />
                    
                  )
                }):(
                  <Loading/>
                )}
                {stories1 ? (
                  <>
                  {stories1.length > 0 && stories1?.map((storie,index)=>{
                    return(
                      <div  
                        key={index}
                        className={styles.player}>
                        <PlayerWidget
                          title={"Consectetur aute non incididunt esse Lorem dolore mollit occaecat elit."}
                          img={storie?.poster || "https://picsum.photos/360/370"}
                          logo={"https://picsum.photos/50/50"}
                          url={`/${storie.category.toLowerCase()}/web-story/${storie?._id}/${storie?.slug}`}
                          category={storie?.category}
                        />
                      </div>
                    )
                  })
                  }
                  </>
                ) :(
                    <Loading/>
                )}
                
              
              </div>
              <br></br>
              <div className={styles.readMore}>
                <div></div>
                <div className={styles.readmoreBlock}>
                  <Link href={"/article"}>
                    <a>{"Read more >"}</a>
                  </Link>
                </div>
              </div>
            </div>
            <br></br>
            <div className={styles.stories}>
              {(stories && stories.length > 2 ) &&
                <h3 className={styles.h3}><TabletOutlined/> Top stories</h3>
              }
              <div className={styles.storyList}>
              {stories2 ? (
                <>
                {stories2.length > 0 && stories2?.map((storie,index)=>{
                  return(
                      <StoryPreview
                        key={index}
                        title={storie?.title}
                        img={storie?.poster}
                        logo={"https://picsum.photos/50/50"}
                        url={`/web-story/${storie?._id}/${storie?.slug}`}
                      />
                  )
                })
                }
                </>
              ) :(
                  <Loading/>
                )}
                
              </div>
            </div>
          </main>

          <footer className="ampstart-footer flex flex-column items-center px3">
            <nav className="ampstart-footer-nav">
                <ul className="list-reset flex flex-wrap mb3">
                  <li className="px1">
                      <a className="text-decoration-none ampstart-label" href="#">About</a>
                  </li>
                  <li className="px1">
                      <a className="text-decoration-none ampstart-label" href="#">Contact</a>
                  </li>
                  <li className="px1">
                      <a className="text-decoration-none ampstart-label" href="#">Terms</a>
                  </li>
                </ul>
            </nav>
            <small> ?? Your Company, 2016 </small>
          </footer>
        </div>
    </>
  )
}
