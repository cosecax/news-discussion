import { Link, Outlet } from 'react-router-dom'
import { getAllNewsRoute, getCreateNewsRoute } from '../../lib/routes'
import css from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={css.layout}>
      <p className={css.logo}>
        <strong>News Discussion</strong>
      </p>
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
    </div>
  )
}

export default Layout
