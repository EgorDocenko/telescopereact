import React,{useState} from 'react'
import styles from './Post.module.css'
const Post = ({data}) => {
const {id,title,body,isHaveImg,like,reposts,isCommented} = data;
const [likeV,setLike] = useState(like);
const [repostsV,setRepostsV] = useState(reposts);
const [comments,setComments] = useState(false);
  return (
    <div className={styles.wrapper}>
        <h1>{title}</h1>
        <p>{body}</p>
        <div className={styles.footerPost}>репосты:{repostsV}</div>
        <div className={styles.footerPost}>лайки:{likeV}</div>
        <button onClick={(e) => 
        {
            e.preventDefault()
            setLike(likeV+1)
        }
        }>лайк</button>
        <button onClick={(e) => 
        {
            e.preventDefault()
            setLike(likeV-1)
        }
        }>дизлайк</button>
    </div>
  )
}

export default Post
