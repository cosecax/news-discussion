import { useFormik } from 'formik'
import { Input, Segment } from '../../components'
import css from './CreateNews.module.scss'

const CreateNews = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      text: '',
      description: '',
    },
    validate: (values) => {
      const errors: Partial<typeof values> = {}
      if (!values.title) errors.title = 'Заголовок не должен быть пустым'
      if (!values.text) errors.text = 'Текст обязателен!'
      else if (values.text.length < 10) errors.text = 'Текст должен содержать больше 10 символов'

      return errors
    },
    onSubmit: (values) => console.log('values', values),
  })
  return (
    <Segment title="Создание новостной заметки" className={css['create-news']}>
      <form onSubmit={(e) => {
        e.preventDefault()
        formik.handleSubmit()
        }}>
        <Input name="title" label="Название новости" formik={formik} />
        <Input name="text" label="Текст новости" formik={formik} />
        <Input name="description" label="Заметка о новости" formik={formik} />

        <button>Создать</button>
      </form>
    </Segment>
  )
}

export default CreateNews
