const getAllNewsRoute = () => '/'
const getDetailNewsRoute = ({ id }: { id: string }) => `/news/${id}`

export {
  getAllNewsRoute,
  getDetailNewsRoute
}
