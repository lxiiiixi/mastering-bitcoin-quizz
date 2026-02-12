import type { ButtonHTMLAttributes } from 'react'
import { cx } from '../utils'
import './button.css'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  pill?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  pill = false,
  type = 'button',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(
        'ui-button',
        `ui-button--${variant}`,
        `ui-button--${size}`,
        pill && 'ui-button--pill',
        className,
      )}
      type={type}
      {...props}
    />
  )
}
