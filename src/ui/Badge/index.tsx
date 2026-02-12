import type { HTMLAttributes } from 'react'
import { cx } from '../utils'
import './badge.css'

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
}

export function Badge({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cx(
        'ui-badge',
        `ui-badge--${variant}`,
        `ui-badge--${size}`,
        className,
      )}
      {...props}
    />
  )
}
