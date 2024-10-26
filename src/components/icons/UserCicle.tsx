import { IconType } from '@/types/iconType'
import { FC } from 'react'

export const UserCircle: FC<IconType> = ({ size, color, fill, className }) => {
  return (
    <svg
      width={size}
      height={size}
      color={fill}
      fill={color}
      viewBox="0 0 27 27"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.5 0C20.9558 0 27 6.04415 27 13.5C27 20.9558 20.9558 27 13.5 27C6.04415 27 0 20.9558 0 13.5C0 6.04415 6.04415 0 13.5 0ZM22.0693 18.7334V8.70001L17.0523 13.7167L22.0693 18.7334ZM6.00244 18.9378H20.9979L16.4148 14.3548L14.6681 16.1012C14.5834 16.1857 14.4687 16.2331 14.3491 16.2331H12.651C12.5918 16.2331 12.5331 16.2215 12.4784 16.1989C12.4236 16.1763 12.3739 16.1431 12.3319 16.1012L10.5853 14.3548L6.00223 18.9378H6.00244ZM4.93066 8.6997V18.7337L9.94765 13.7167L4.93066 8.6997ZM21.4316 8.06219H5.56875L12.8379 15.3313H14.1624L21.4316 8.06219Z"
        fill="#255E17"
      />
    </svg>
  )
}

export default UserCircle
