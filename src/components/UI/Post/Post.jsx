import React, { useState } from 'react'
import styles from './Post.module.css'



const Comment = ({ item, index }) => {

  const [handdeComment, setHanddeComment] = useState(false);

  const name = Object.keys(item)[0];
  const text = item[name];
  const isLongText = text.length > 70;
  const visibleText = isLongText ? text.slice(0, 67) + '...' : text;


  const showAll = (e) => {
    e.preventDefault();
    setHanddeComment(true);
  }

  const showMore = <a onClick={showAll} className={styles.show_more_link}>Показать больше</a>

  return (
    <div
      key={index}
      className={styles.oneComment}
      style = {{
        height:handdeComment ? 'auto' : ' '
      }}
    >
      <img src={`db/users/avatars/${name}.jpeg`} alt="Аватар комментатора" />
      <div className="right_block">
        <h1>{name}</h1>
        <p>{handdeComment
          ? text
          : <>
            {visibleText}{isLongText && showMore}
          </>}</p>
      </div>
    </div>
  );

}




const Post = ({ data }) => {

  const { id, title, body, isHaveImg, like, reposts, isCommented, dislike, amountComments, comments } = data;
  const [isLiked, setLiked] = useState(0);
  const [isDislike, setDislike] = useState(0);
  const [hasCommented, setCommented] = useState(false);
  const [commentedVisible, setCommentedVisible] = useState(false);
  const commendBlock = <div
    className={styles.commend_block}
    style={{

      left: commentedVisible && "26.8vw"

    }}
  >
    {comments.map(
      (item, index) => <Comment item={item} index={index} />

    )}
  </div>;


  return (
    <div className={styles.wrapper}>
      <div
        className={styles.inner_wrapper}
        style={{
          borderRadius: commentedVisible && "15px 0px 0px 0px"
        }}
      >
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
            <div className="#">{reposts}</div>
            <img alt='репост'
              src='img/repost.png'
              onClick={
                () => {
                  alert("появится понель репостов")
                }
              } />


          </div>

          <div className={styles.widget_wrapper}>
            <div className="#">{dislike + isDislike}</div>
            <img alt='дизлайк'
              src='img/dislike.png'
              onClick={
                () => {
                  if (isDislike) setDislike(0)
                  else {
                    setDislike(1);
                    setLiked(0)
                  }
                }
              } />


          </div>

          <div className={styles.widget_wrapper}>
            <div className="#">{like + isLiked}</div>
            <img alt='лайк'
              src='img/like.png'
              onClick={
                () => {
                  if (isLiked) setLiked(0)
                  else {
                    setLiked(1);
                    setDislike(0);

                  }
                }
              } />


          </div>

          <div className={styles.widget_wrapper}>
            <div className="#">{amountComments}</div>
            <img alt='коммент'
              src='img/comment.png'
              onClick={
                () => {
                  if (hasCommented) {
                    setCommentedVisible(false);
                    setTimeout(
                      () => {
                        setCommented(false);
                      }, 300
                    )
                  } else {
                    setCommented(true);
                    setTimeout(
                      () => {
                        setCommentedVisible(true);
                      }, 100
                    )
                  }
                }
              } />


          </div>

        </div>
      </div>

      {

        hasCommented && commendBlock

      }

    </div>
  )
}
export default Post