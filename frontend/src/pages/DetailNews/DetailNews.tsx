import { useParams } from 'react-router-dom'
import { trpc } from '../../lib/trpc'
import css from './DetailNews.module.scss'
import { Segment } from '../../components'

const DetailNews = () => {
  const { id } = useParams()
  if (!id) return <p>Страница новости содержит некорректный url</p>
  
  const { data, isLoading, isFetching, isError, error } = trpc.getDetailNews.useQuery({ id })
  if (isLoading || isFetching) return <span>Loading...</span>
  if (isError) return <span>Error: {error.message}</span>
  if (!data.news) return <span>News not found</span>

  return (
    <Segment title={data.news.title} className={css['detail-news']}>
      <p className={css.text}>{data.news.text}</p>
      <div className={css.inside}>
        <p>Text inside </p>
      </div>
    </Segment>
  )
}

export default DetailNews
