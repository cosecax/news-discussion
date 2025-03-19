import css from './CreateNews.module.scss'

const CreateNews = () => {
  return (
    <div className={css['create-news']}>
      <h1 className={css.title}>Создание новостной заметки</h1>
      <span className={css.text}>Форма создания заметки будет здесь...</span>
    </div>
  )
}

export default CreateNews