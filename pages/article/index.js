import React,{useState,useEffect,Suspense}  from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import ArticlePreview from '../../components/ArticlePreview'
import { getArticle } from '../../services/articles'
import {
  FireOutlined,
  TabletOutlined
} from '@ant-design/icons';
import BlogHead from '../../components/BlogHead'
import {ArticleHeader} from '../../components/Header'
import {HomeMenu as Menu} from '../../components/Menu'
import Loading from '../../Loading'
import StoriesWidget from '../../components/StoriesWidget'
import { useRouter } from 'next/router'
import Script from 'next/script'
import * as gtag from '../../lib/gtag'
import Link from 'next/link'

export default function Articles() {

  const [articles,setArticles] =  useState([])
  const router = useRouter()


  useEffect(()=>{
    (async ()=>{
      const res = await getArticle()
      setArticles(res.data)
    })();
  },[])



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
        <div className={styles.container}>
          <Menu/>
          <main className={styles.main}>
            <div className={styles.articles + " "+styles.mTop}>
              {/* <br></br>
              <input className={"searchInput"} type={"search"} placeholder='Search ...'/>
              <br></br> */}
              <h3 className={styles.h3}> <FireOutlined /> &nbsp;  Articles</h3>
              <div className={styles.articleList}>
                {articles && articles.length >0 ? articles?.map((article,index)=>{
                  return(
                    <ArticlePreview
                      key={index}
                      odd = {index%2 === 0}
                      img={article?.poster}
                      category={article?.category}
                      title={article?.title}
                      url={`/article/${article?._id}/${article?.slug}`}
                      updatedAt = {article?.updatedAt}
                      description = {article?.description}
                    />
                    
                  )
                }):(
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
            <small> © Your Company, 2016 </small>
          </footer>
        </div>
    </>
  )
}
