import React,{useState,useEffect}  from 'react'
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
import Menu from '../components/Menu'
import Loading from '../Loading'
import Carroussel from '../components/Caroussel'
import StoriesWidget from '../components/StoriesWidget'


export default function Home() {

  const [articles,setArticles] =  useState([])
  const [stories,setStories] =  useState([])

  useEffect(()=>{
    (async ()=>{
      const res = await getTopArticles()
      setArticles(res.data)
      const res2 = await getStories()
      setStories(res2.data)
    })();
  },[])

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <BlogHead></BlogHead>
        <ArticleHeader></ArticleHeader>
        <Menu></Menu>
        <div className={styles.articles}>
          <br></br>
          <input className={styles.searchInput} type={"search"} placeholder='Search ...' />
          <br></br>
          <br></br>

          <StoriesWidget/>
          <br></br>
          <br></br>
          <h3 className={styles.h3}> <FireOutlined /> Top articles</h3>
          <div className={styles.articleList}>
            {articles  ? articles?.map((article,index)=>{
              return(
                <ArticlePreview
                  key={index}
                  odd = {index%2 === 0}
                  img={article?.poster}
                  category={article?.category}
                  title={article?.title}
                  url={`/article/${article?._id}/${article?.slug}`}
                />
                
              )
            }):(
              <Loading/>
            )}

          </div>
          <div className={styles.readMore}>
            <div></div>
            <div className={styles.readmoreBlock}>
              <a href='#'>{"Read more >"}</a>
            </div>
          </div>
        </div>
        <br></br>
        <div className={styles.stories}>
          <h3 className={styles.h3}><TabletOutlined/> Top stories</h3>
          <div className={styles.storyList}>
          {stories ? stories?.map((storie,index)=>{
              return(
                <StoryPreview
                  key={index}
                  title={storie?.title}
                  img={storie?.poster}
                  logo={"https://picsum.photos/50/50"}
                  url={`/web-story/${storie?._id}/${storie?.slug}`}
                />
              )
            }):(
              <Loading/>
            )}
            
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
