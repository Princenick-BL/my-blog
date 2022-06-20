import React from 'react'
import styles from './index.module.scss'
export default function Header() {
  return (
    <div>Header</div>
  )
}

export function ArticleHeader(){
    return(
        <header
            className="ampstart-headerbar fixed flex justify-start items-center top-0 left-0 right-0 pl2 pr4"
        >
            <div
                role="button"
                aria-label="open sidebar"
                on="tap:header-sidebar.toggle"
                tabIndex="0"
                className="ampstart-navbar-trigger pr2"
            >
                ☰
            </div>
            <amp-img
                src="https://picsum.photos/50/50"
                width="100"
                height="61.3"
                layout="fixed"
                className="my0 mx-auto"
                alt="The Blog"
            ></amp-img>
        </header>

    )
}