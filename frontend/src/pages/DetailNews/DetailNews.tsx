import { useParams } from "react-router-dom"

const DetailNews = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>News Title {id}</h1>
      <p>News description ...</p>
      <div>
        <p>Text inside </p>
      </div>
    </div>
  )
}

export default DetailNews