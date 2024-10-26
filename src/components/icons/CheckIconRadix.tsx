import { cn } from '@/lib/utils'
import { IconType } from '@/types/iconType'
import { FC } from 'react'

export const CheckIconRadix: FC<IconType> = ({ size, color, fill, className }) => {
  return (
    <svg
      width={size}
      height={size}
      color={fill}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'lucide lucide-circle h-2.5 w-2.5 fill-current text-current',
        className
      )}
    >
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  )
}
