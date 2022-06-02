import React,{Fragment,useEffect,useRef} from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import PlayerWidget from '../../components/PlayerWidget'
import { ArticleHeader } from '../../components/Header'
export default function Article() {



    return (
        <Fragment>
            <Head></Head>
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
