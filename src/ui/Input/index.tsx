import type { InputHTMLAttributes } from 'react'
import { useId } from 'react'
import { cx } from '../utils'
import './input.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
}

export function Input({
  label,
  hint,
  error,
  id,
  className,
  ...props
}: InputProps) {
  const autoId = useId()
  const inputId = id ?? autoId
  const hintId = hint ? `${inputId}-hint` : undefined
  const errorId = error ? `${inputId}-error` : undefined
  const describedBy = [errorId, hintId].filter(Boolean).join(' ') || undefined

  return (
    <div className={cx('ui-field', className)}>
      {label && (
        <label className="ui-field__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cx('ui-input', error && 'ui-input--error')}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        {...props}
      />
      {error ? (
        <span className="ui-field__error" id={errorId}>
          {error}
        </span>
      ) : (
        hint && (
          <span className="ui-field__hint" id={hintId}>
            {hint}
          </span>
        )
      )}
    </div>
  )
}
