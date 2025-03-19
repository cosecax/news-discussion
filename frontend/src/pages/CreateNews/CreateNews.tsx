import { Segment } from '../../components'
import css from './CreateNews.module.scss'

const CreateNews = () => {
  return (
    <Segment title="Создание новостной заметки" className={css['create-news']}>
      <span className={css.text}>Форма создания заметки будет здесь...</span>
    </Segment>
  )
}

export default CreateNews