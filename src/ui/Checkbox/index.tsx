import type { InputHTMLAttributes } from 'react'
import { useId } from 'react'
import { cx } from '../utils'
import './checkbox.css'

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

export function Checkbox({ label, id, className, ...props }: CheckboxProps) {
  const autoId = useId()
  const checkboxId = id ?? autoId

  return (
    <label className={cx('ui-checkbox', className)} htmlFor={checkboxId}>
      <input
        id={checkboxId}
        type="checkbox"
        className="ui-checkbox__input"
        {...props}
      />
      <span className="ui-checkbox__box" aria-hidden="true" />
      {label && <span className="ui-checkbox__label">{label}</span>}
    </label>
  )
}
