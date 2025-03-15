const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>
}

const getAllNewsRoute = () => '/'
const detailNewsRouteParams = getRouteParams({ id: true })
export type DetailNewsParams = typeof detailNewsRouteParams
const getDetailNewsRoute = ({ id }: DetailNewsParams) => `/news/${id}`

export { getAllNewsRoute, getDetailNewsRoute, detailNewsRouteParams }
