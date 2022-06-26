import React,{Fragment,useEffect,useState} from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import PlayerWidget from '../../components/PlayerWidget'
import { ArticleHeader } from '../../components/Header'
import Menu from '../../components/Menu'
import BlogHead from '../../components/BlogHead'
import { getSection } from '../../utils/article.utils'
import axios from 'axios'
import { config as endpoint } from '../../constants'

export const config = { amp: true };


export default function Article({location,article}) {


    // const article = {
    //     meta : {
    //         category : "FOOD",
    //         title : "Ginger Strawberry Spritzer",
    //         updatedAt : "December 13, 2016",
    //         poster : "https://picsum.photos/1024/700"
    //     },
    //     sections : [
    //         {
    //             type : "TEXT_BLOCK",
    //             meta : {

    //             },
    //             content : `
    //                 Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
    //                 quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
    //                 Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
    //                 Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit
    //                 fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et
    //                 ultrices posuere.`

    //         },
    //         {
    //             type : "IMAGE_BLOCK",
    //             meta : {
    //                 width : 1280,
    //                 height : 700,
    //                 alt :" Hello world and forstg nflksjl "
    //             },
    //             mediaUrl : `https://picsum.photos/1024/700`

    //         }

    //     ]
    // }
      
    useEffect(()=>{
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-230778709-1');

    },[])

    return (
        <Fragment>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-230778709-1"></script>
                <meta charSet="utf-8"/>
                <title>Hello, AMPs</title>
                <link rel="canonical" href={location}/>
            </Head>
            <BlogHead/>
            <Fragment>
               
                <ArticleHeader/>

                <Menu/>

                <main id="content" role="main">
                    <br></br>
                    <br></br>

                    <article className="recipe-article">
                        <header>
                            <span className="ampstart-subtitle block px3 pt2 mb2">{article?.category}</span>
                            <h1 className="mb1 px3 fsh1">{article?.title}</h1>
                            <br></br>
                            <address className="ampstart-byline clearfix mb4 px3 h5">
                                <time
                                    className="ampstart-byline-pubdate block bold my1"
                                    dateTime="2016-12-13"
                                >{`Updated at : ${article?.updatedAt}`}</time>
                            </address>
                            <amp-img
                                src={article?.poster}
                                width="1280"
                                height="853"
                                layout="responsive"
                                alt="The final spritzer"
                                className="mb4 mx3 br5"
                            ></amp-img>
                        </header>
                        <div  className="main">

                            {article?.sections?.map((section,index)=>{
                                return getSection(section)
                            })}
                        </div>
                    
                    </article>
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
            </Fragment>
            
        </Fragment>
    )
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    
    const { req, query, res, asPath, pathname } = context;
    const {blob}  = query
    const articleId = blob[0]

    if (req) {
      var host = req.headers.referer // will give you localhost:3000
    }

    const result = await axios.get(`${endpoint.API_ENDPOINT}/article/${articleId}`)

    if(result?.data?.success){
        return { 
            props: {
                location : host || "",
                article : result.data?.data
            } 
        }
    }
    // Pass data to the page via props

    return { 
        props: {
            location : host || "",
        } 
    }
  }