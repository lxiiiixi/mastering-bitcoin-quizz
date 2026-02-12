import type { TextareaHTMLAttributes } from 'react'
import { useId } from 'react'
import { cx } from '../utils'
import './textarea.css'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  hint?: string
  error?: string
}

export function Textarea({
  label,
  hint,
  error,
  id,
  className,
  ...props
}: TextareaProps) {
  const autoId = useId()
  const textareaId = id ?? autoId
  const hintId = hint ? `${textareaId}-hint` : undefined
  const errorId = error ? `${textareaId}-error` : undefined
  const describedBy = [errorId, hintId].filter(Boolean).join(' ') || undefined

  return (
    <div className={cx('ui-field', className)}>
      {label && (
        <label className="ui-field__label" htmlFor={textareaId}>
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={cx('ui-textarea', error && 'ui-textarea--error')}
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
