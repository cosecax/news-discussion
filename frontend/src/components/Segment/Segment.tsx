import classNames from 'classnames'
import css from './Segment.module.scss'

type TSegment = {
  title: React.ReactNode,
  size?: 1 | 2,
  description?: string,
  children?: React.ReactNode,
  className?: string,
}

const Segment = ({ title, size = 1, description, children,className }: TSegment) => {
  return (
    <div className={classNames(css.segment, className)}>
      {size === 1 ? <h1 className={css.title}>{title}</h1> : <h2 className={css.title}>{title}</h2>}
      {description && <p className={css.description}>{description}</p>}
      {children && <div className={css.content}>{children}</div>}
    </div>
  )
}

export default Segment