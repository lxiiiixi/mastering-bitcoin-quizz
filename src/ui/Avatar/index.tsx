import type { HTMLAttributes } from 'react'
import { cx } from '../utils'
import './avatar.css'

export type AvatarSize = 'sm' | 'md' | 'lg'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  name?: string
  size?: AvatarSize
}

const getInitials = (name?: string) => {
  if (!name) return '?'
  const parts = name.trim().split(/\s+/)
  const initials = parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? '')
  return initials.join('')
}

export function Avatar({
  src,
  alt,
  name,
  size = 'md',
  className,
  ...props
}: AvatarProps) {
  const label = alt ?? name ?? 'Avatar'

  return (
    <div className={cx('ui-avatar', `ui-avatar--${size}`, className)} {...props}>
      {src ? (
        <img src={src} alt={label} />
      ) : (
        <span className="ui-avatar__text" aria-label={label}>
          {getInitials(name)}
        </span>
      )}
    </div>
  )
}
