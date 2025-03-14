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
        <div key={item.id}>{item.text}</div>
      ))}
    </div>
  )
}

export default AllNews
