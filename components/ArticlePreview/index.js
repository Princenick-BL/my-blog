import React from 'react'
import Image from 'next/image'
import styles from './index.module.scss'
import {Card,Button} from 'react-bootstrap'

export default function ArticlePreview({url,img,title,category,odd}) {

  return (
      <a target={"_blank"} rel="noreferrer" href={url}>
        <Card style={{ width: '100%',marginTop:"1rem",marginBottom:"1rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{category}</Card.Title>
            <Card.Text>
              {title}
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
  )
}
