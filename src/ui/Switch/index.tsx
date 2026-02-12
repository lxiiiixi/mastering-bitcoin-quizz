import type { InputHTMLAttributes } from 'react'
import { useId } from 'react'
import { cx } from '../utils'
import './switch.css'

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

export function Switch({ label, id, className, ...props }: SwitchProps) {
  const autoId = useId()
  const switchId = id ?? autoId

  return (
    <label className={cx('ui-switch', className)} htmlFor={switchId}>
      <input id={switchId} type="checkbox" className="ui-switch__input" {...props} />
      <span className="ui-switch__track" aria-hidden="true">
        <span className="ui-switch__thumb" />
      </span>
      {label && <span className="ui-switch__label">{label}</span>}
    </label>
  )
}
