import { Link } from 'react-router-dom'
import { getDetailNewsRoute } from '../../lib/routes'
import { trpc } from '../../lib/trpc'

const AllNews = () => {
  const { isLoading, isFetching, isError, error, data } = trpc.getNews.useQuery()

  if (isLoading || isFetching) return <span>Loading...</span>
  if (isError) return <span>Error: {error.message}</span>

  return (
    <div>
      <h1>News Discussion</h1>
      <p>news list:</p>
      {data.newsList.map((item) => (
        <Link key={item.id} to={getDetailNewsRoute({ id: item.id.toString() })}>
          <div>{item.text}</div>
        </Link>
      ))}
    </div>
  )
}

export default AllNews
