import { Link, Outlet } from 'react-router-dom'
import { getAllNewsRoute, getCreateNewsRoute } from '../../lib/routes'
import { Segment } from '../index'
import css from './Layout.module.scss'

const Layout = () => {
  return (
    <Segment
      title={
        <div className={css.navigation}>
          <span className={css.logo}>Сайт Новостей</span>
        </div>
      }
      className={css.layout}
    >
      <ul className={css.menu}>
        <li className={css.item}>
          <Link className={css.link} to={getAllNewsRoute()}>
            Главная
          </Link>
        </li>
        <li className={css.item}>
          <Link className={css.link} to={getCreateNewsRoute()}>
            Создать
          </Link>
        </li>
      </ul>
      <hr />
      <div className={css.content}>
        <Outlet />
      </div>
    </Segment>
  )
}

export default Layout
