import { Link } from 'react-router-dom'
import { trpc } from '../../lib/trpc'
import { getDetailNewsRoute } from '../../lib/routes'

const AllNews = () => {
  const { isLoading, isFetching, isError, error, data } = trpc.getNews.useQuery()

  if (isLoading || isFetching) return <span>Loading...</span>
  if (isError) return <span>Error: {error.message}</span>

  return (
    <div>
      <h1>News Discussion</h1>
      <p>news list:</p>
      {data.newsList.map((item) => (
        <Link to={getDetailNewsRoute({ id: item.id.toString() })}>
          <div key={item.id}>{item.text}</div>
        </Link>
      ))}
    </div>
  )
}

export default AllNews
