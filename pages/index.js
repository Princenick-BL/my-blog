import React,{useState,useEffect}  from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import ArticlePreview from '../components/ArticlePreview'
import StoryPreview from '../components/StoryPreview'
import { getTopArticle } from '../services/articles'
import {
  FireOutlined,
  TabletOutlined
} from '@ant-design/icons';
import BlogHead from '../components/BlogHead'
import {ArticleHeader} from '../components/Header'
import Menu from '../components/Menu'

export default function Home() {

  const [articles,setArticles] =  useState([])
  useEffect(()=>{
    (async ()=>{
      const res = await getTopArticle()
      setArticles(res.data)
    })();
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogHead/>
      <main className={styles.main}>
        <ArticleHeader/>
        <Menu/>
        <div className={styles.articles}>
          <h3 className={styles.h3}> <FireOutlined /> Top articles</h3>
          <div className={styles.articleList}>
            {articles && articles?.map((article,index)=>{
              return(
                <ArticlePreview
                  key={index}
                  odd = {index%2 === 0}
                  img={article?.poster}
                  category={article?.category}
                  test={article?.title}
                />

              )
            })}

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
          <h3 className={styles.h3}><TabletOutlined/> Stories</h3>
          <div className={styles.storyList}>
            {[0,1,2,3,4,5,6].map((story,index)=>{
              return(
                <StoryPreview
                  key={index}
                  title={"Hello world kdflzj jhfekjl"}
                  img={"https://picsum.photos/1024/700"}
                />
              )
            })}
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
