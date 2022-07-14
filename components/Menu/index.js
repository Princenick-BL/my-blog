import React , {useState,useEffect} from 'react'
import Link from 'next/link'
import styles from './index.module.scss'

export function HomeMenu() {

    const [show,setShow] = useState(false)

    return (
        <div className={styles.header}>
            <div className={styles.head}>
                <div className={styles.button} onClick={(e)=>setShow(true)}>
                    <div>
                        ☰
                    </div>
                    <div className={styles.text}>
                        MENU
                    </div>
                </div>
                <div className={styles.content}>
                    <h1>LuxeStoryBlog</h1>
                </div>
            </div>
            {show &&
                <div className={styles.shadow}>

                    <div className={styles.side+" "+(show ? styles.active : styles.innactive)}> 
                        <div className={styles.text}> 
                            <h4 style={{cursor:"pointer",marginTop:".5rem"}} onClick={(e)=>setShow(false)}>✕</h4>
                            <br></br>
                            <br></br>

                            <nav className="ampstart-sidebar-nav ampstart-nav">
                            <ul className="list-reset m0 p0 ampstart-label">
                                <li className="ampstart-nav-item">
                                    <Link href={"/"}>
                                        <a className="ampstart-nav-link">HOME</a>
                                    </Link>
                                </li>
                                
                                <li className="ampstart-nav-item">
                                    <a className="ampstart-nav-link" href="#">BEAUTY</a>
                                </li>
                                <li className="ampstart-nav-item">
                                    <a className="ampstart-nav-link" href="#">SHOP</a>
                                </li>
                            </ul>
                        </nav>

                        
                        <ul className="ampstart-sidebar-faq list-reset m0">
                            <li className="ampstart-faq-item">
                                <a href="#" className="text-decoration-none">About</a>
                            </li>
                            <li className="ampstart-faq-item">
                                <a href="#" className="text-decoration-none">Contact</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}


export default function Menu() {
  return (
    <amp-sidebar
        id="header-sidebar"
        className="ampstart-sidebar px3"
        layout="nodisplay"
    >
        <div className="flex justify-start items-center ampstart-sidebar-header">
            <div
                role="button"
                aria-label="close sidebar"
                on="tap:header-sidebar.toggle"
                tabIndex="0"
                className="ampstart-navbar-trigger items-start"
            >
            ✕
            </div>
        </div>
        <br></br>
        <br></br>
        <nav className="ampstart-sidebar-nav ampstart-nav">
            <ul className="list-reset m0 p0 ampstart-label">
                <li className="ampstart-nav-item">
                    <Link href={"/"}>
                        <a className="ampstart-nav-link">HOME</a>
                    </Link>
                </li>
                
                <li className="ampstart-nav-item">
                    <a className="ampstart-nav-link" href="#">BEAUTY</a>
                </li>
                <li className="ampstart-nav-item">
                    <a className="ampstart-nav-link" href="#">SHOP</a>
                </li>
            </ul>
        </nav>

        
        <ul className="ampstart-sidebar-faq list-reset m0">
            <li className="ampstart-faq-item">
                <a href="#" className="text-decoration-none">About</a>
            </li>
            <li className="ampstart-faq-item">
                <a href="#" className="text-decoration-none">Contact</a>
            </li>
        </ul>
    </amp-sidebar>
  )
}
