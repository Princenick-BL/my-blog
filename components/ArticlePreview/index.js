// import React from 'react'
// import Image from 'next/image'
import styles from './index.module.scss'
// import {Card,Button} from 'react-bootstrap'

// export default function ArticlePreview({url,img,title,category,odd}) {

//   return (
//       <a className={styles.cardBox} target={"_blank"} rel="noreferrer" href={url}>
//         <Card style={{ width: '100%',marginTop:"1rem",marginBottom:"1rem" }}>
//           <Card.Img className={styles.img} variant="top" src={img} />
//           <Card.Body className={styles.body}>
//             <Card.Title>{category}</Card.Title>
//             <Card.Text>
//               {title}
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </a>
//   )
// }

import React, { Component } from 'react'
import Image from 'next/image'

export default class ArticlePreview extends Component {
  render() {
    return (
      <a className={styles.card} target={"_blank"} rel="noreferrer" href={this.props.url}>
        <div >
          <div>
            <Image
              width={700}
              height={700*9/16}
              src={this.props.img}
            />
          </div>
          <div className={styles.meta}>
            <h1>
              {this.props.title}
            </h1>
            <div className={styles.foot}>
              <div className={styles.cat}>{this.props.category}</div>
              <div className={styles.date}>{ new Date(this.props.updatedAt).toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </a>
    )
  }
}
