import { cn } from '@/lib/utils'
import { FC } from 'react'
interface IconProps {
  size?: number
  color?: string
  fill?: string
  className?: string
}

export const CheckIconRadix: FC<IconProps> = ({ size, color, fill, className }) => {
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
