import React from 'react'
import Post from '../Post/Post'
import styles from './PostPanel.module.css'

const data=[
    
  
    {
      id: 0,
      title: "Победа",
      body:
        "Получилось создать сайт. Это было нелегко, но я справился! Теперь у меня есть свой собственный веб-сайт, и я горд на себя.",
      isHaveImg: false,
      like: 777,
      dislike: 4,
      reposts: 777,
      isCommented: true,
    },
    {
      id: 1,
      title: "Изучение нового языка",
      body:
        "Решил начать изучать новый язык программирования. Это всегда интересно и стимулирует мозг. Я выбрал JavaScript, так как он очень популярен и мощный.",
      isHaveImg: false,
      like: 500,
      dislike: 2,
      reposts: 200,
      isCommented: true,
    },
    {
      id: 2,
      title: "Путешествие в горы",
      body:
        "Сегодня отправился в путешествие в горы. Восхождение было трудным, но вид сверху оказался потрясающим. Это действительно впечатляет и наполняет энергией.",
      isHaveImg: true,
      like: 1000,
      dislike: 8,
      reposts: 300,
      isCommented: true,
    },
    {
      id: 3,
      title: "Встреча с друзьями",
      body:
        "Устроил встречу с друзьями после долгого времени. Было здорово провести время вместе, поделиться новостями и вспомнить старые приключения.",
      isHaveImg: false,
      like: 400,
      dislike: 1,
      reposts: 100,
      isCommented: true,
    },
    {
      id: 4,
      title: "Работа над проектом",
      body:
        "Сегодня провел целый день, работая над своим проектом. Это требует много усилий и концентрации, но я настроен достичь успеха.",
      isHaveImg: false,
      like: 600,
      dislike: 3,
      reposts: 200,
      isCommented: true,
    },
    {
      id: 5,
      title: "Новый рецепт",
      body:
        "Попробовал новый рецепт салата. Оказался очень вкусным! Теперь это будет одно из моих любимых блюд.",
      isHaveImg: true,
      like: 300,
      dislike: 7,
      reposts: 50,
      isCommented: true,
    },
    {
      id: 6,
      title: "Концерт любимой группы",
      body:
        "Сходил на концерт своей любимой группы. Это было незабываемое шоу! Я получил огромное удовольствие и зарядился энергией на долгое время.",
      isHaveImg: true,
      like: 800,
      dislike: 5,
      reposts: 400,
      isCommented: true,
    },
    {
      id: 7,
      title: "Утренняя пробежка",
      body:
        "Сегодня утром совершил пробежку. Это помогло мне проснуться, зарядиться энергией и подготовиться к дню.",
      isHaveImg: false,
      like: 200,
      dislike: 2,
      reposts: 50,
      isCommented: true,
    },
    {
      id: 8,
      title: "Отдых на пляже",
      body:
        "Провел день на пляже, наслаждаясь солнцем и морем. Отличный способ расслабиться и забыть о повседневных заботах.",
      isHaveImg: true,
      like: 700,
      dislike: 9,
      reposts: 300,
      isCommented: true,
    },
    {
      id: 9,
      title: "Новая книга",
      body:
        "Начал читать новую книгу. Она захватывающая и увлекательная. Я наслаждаюсь каждой страницей и узнаю что-то новое.",
      isHaveImg: false,
      like: 400,
      dislike: 6,
      reposts: 100,
      isCommented: true,
    },
    {
      id: 10,
      title: "Тренировка в зале",
      body:
        "Сегодня прошла интенсивная тренировка в зале. Это было сложно, но я чувствую, что становлюсь сильнее и более выносливым.",
      isHaveImg: false,
      like: 500,
      dislike: 3,
      reposts: 200,
      isCommented: true,
    },
    {
      id: 11,
      title: "Выставка искусства",
      body:
        "Посетил выставку искусства. Это было вдохновляюще! Я увидел множество талантливых работ и почувствовал волшебство искусства.",
      isHaveImg: true,
      like: 600,
      dislike: 7,
      reposts: 300,
      isCommented: true,
    },
    {
      id: 12,
      title: "Велосипедная прогулка",
      body:
        "Совершил прекрасную велосипедную прогулку. Природа была прекрасной, а ветер в лицо придавал особый шарм этому приключению.",
      isHaveImg: true,
      like: 300,
      dislike: 4,
      reposts: 100,
      isCommented: true,
    },
    {
      id: 13,
      title: "Ужин с семьей",
      body:
        "Устроил ужин с семьей. Было здорово провести время вместе, поговорить и насладиться вкусной едой.",
      isHaveImg: false,
      like: 400,
      dislike: 8,
      reposts: 200,
      isCommented: true,
    },
    {
      id: 14,
      title: "Путешествие за границу",
      body:
        "Совершил путешествие за границу. Познакомился с новыми культурами, попробовал национальную кухню и создал незабываемые воспоминания.",
      isHaveImg: true,
      like: 500,
      dislike: 2,
      reposts: 300,
      isCommented: true,
    }
  
]

const PostPanel = ({startPus,endPos}) => {
const dataSlice = data.slice(startPus,endPos)
const posts = dataSlice.map(
    (postData) => <Post data = {postData}/>
)
  return (
    <div className={styles.wrapper}>
      {posts}
    </div>
  )
}

export default PostPanel
