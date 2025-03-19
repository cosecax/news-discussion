import { Link } from 'react-router-dom'
import { getDetailNewsRoute } from '../../lib/routes'
import { trpc } from '../../lib/trpc'
import css from './AllNews.module.scss'
import { Segment } from '../../components'

const AllNews = () => {
  const { isLoading, isFetching, isError, error, data } = trpc.getNews.useQuery()

  if (isLoading || isFetching) return <span>Loading...</span>
  if (isError) return <span>Error: {error.message}</span>

  return (
    <Segment className={css['all-news']} title="Лента Новостей">
      <p className={css.list}>news list:</p>
      {data.newsList.map((item) => (
        <Segment
          key={item.id}
          className={css.news}
          title={
            <Link className={css.link} to={getDetailNewsRoute({ id: item.id.toString() })}>
              <div className={css.title}>{item.title}</div>
            </Link>
          }
        >
          <span className={css.text}>{item.text}</span>
        </Segment>
      ))}
    </Segment>
  )
}

export default AllNews
