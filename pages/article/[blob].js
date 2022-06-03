import React,{Fragment,useEffect,useState} from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import PlayerWidget from '../../components/PlayerWidget'
import { ArticleHeader } from '../../components/Header'


export default function Article({location}) {
      

    return (
        <Fragment>
            <Head>
                <meta charSet="utf-8"/>
                <title>Hello, AMPs</title>
                <link rel="canonical" href={location}/>
            </Head>
            <Fragment>
                <ArticleHeader/>  
                <main className={styles.main}>

                    <section>
                      <h1>Default article title default title</h1>
                      <div className={styles.inArticleWidget}>
                        <PlayerWidget/>
                      </div>
                    </section>
                    <aside>
                       <PlayerWidget/>
                    </aside>
                </main>
                <footer className={styles.footer}>

                </footer>
            </Fragment>
            
        </Fragment>
    )
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    
    const { req, query, res, asPath, pathname } = context;
    if (req) {
      var host = req.headers.referer // will give you localhost:3000
    }
    // Pass data to the page via props

    return { props: {location : host || ""} }
  }