import type { HTMLAttributes, ReactNode } from 'react'
import { cx } from '../utils'
import './card.css'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  footer?: ReactNode
}

export function Card({
  title,
  subtitle,
  footer,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div className={cx('ui-card', className)} {...props}>
      {(title || subtitle) && (
        <div className="ui-card__header">
          {title && <h3 className="ui-card__title">{title}</h3>}
          {subtitle && <p className="ui-card__subtitle">{subtitle}</p>}
        </div>
      )}
      {children && <div className="ui-card__body">{children}</div>}
      {footer && <div className="ui-card__footer">{footer}</div>}
    </div>
  )
}
