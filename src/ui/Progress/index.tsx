import type { HTMLAttributes } from 'react'
import { cx } from '../utils'
import './progress.css'

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  label?: string
}

export function Progress({
  value,
  max = 100,
  label,
  className,
  ...props
}: ProgressProps) {
  const safeMax = max <= 0 ? 100 : max
  const clamped = Math.min(Math.max(value, 0), safeMax)
  const percent = Math.round((clamped / safeMax) * 100)

  return (
    <div className={cx('ui-progress', className)} {...props}>
      {label && (
        <div className="ui-progress__label">
          <span>{label}</span>
          <span>{percent}%</span>
        </div>
      )}
      <div
        className="ui-progress__track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={safeMax}
        aria-valuenow={clamped}
      >
        <div className="ui-progress__fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}
