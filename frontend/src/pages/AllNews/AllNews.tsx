import { Link } from 'react-router-dom'
import { getDetailNewsRoute } from '../../lib/routes'
import { trpc } from '../../lib/trpc'
import css from './AllNews.module.scss'

const AllNews = () => {
  const { isLoading, isFetching, isError, error, data } = trpc.getNews.useQuery()

  if (isLoading || isFetching) return <span>Loading...</span>
  if (isError) return <span>Error: {error.message}</span>

  return (
    <div className={css['all-news']}>
      <h1 className={css.title}>News Discussion</h1>
      <p className={css.list}>news list:</p>
      {data.newsList.map((item) => (
        <div className={css.news} key={item.id}>
          <Link className={css.link} to={getDetailNewsRoute({ id: item.id.toString() })}>
            <div className={css.text}>{item.text}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default AllNews
