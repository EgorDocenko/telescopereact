import React, { useState } from 'react'
import styles from './Post.module.css'
const Post = ({ data }) => {
  const { id, title, body, isHaveImg, like, reposts, isCommented, disLikes } = data;
  const [isLiked, setLiked] = useState(0)
  return (
    <div className={styles.wrapper}>
      <div className={styles.header_post}>

        <div className={styles.title}>

          {title}

        </div>

        <div className={styles.body}>

          {body}

        </div>

      </div>
      <div className={styles.footer_post}>
        <div className={styles.widget_wrapper}>
          <div className="#">10</div>
          <button>r</button>
        </div>

        <div className={styles.widget_wrapper}>
          <div className="#">{135 + isLiked}</div>
          <button onClick={
            () => {
              if(isLiked) setLiked(0)

              else(setLiked(1))

              
            }
          }>l</button>
        </div>

        <div className={styles.widget_wrapper}>
          <div className="#">2</div>
          <button>d</button>
        </div>

        <div className={styles.widget_wrapper}>
          <div className="#">65</div>
          <button>c</button>
        </div>

      </div>
    </div>
  )
}

export default Post
