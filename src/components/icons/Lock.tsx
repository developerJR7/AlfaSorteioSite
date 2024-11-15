import { IconType } from '@/types/iconType'
import { FC } from 'react'

const IconLock: FC<IconType> = ({ size, color, fill, className }) => {
  return (
    <svg
      width={size}
      height={size}
      color={fill}
      fill={color}
      viewBox="0 0 24 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21 12H20V8C20 3.588 16.412 0 12 0C7.588 0 4 3.588 4 8V12H3C1.34667 12 0 13.3453 0 15V29C0 30.6547 1.34667 32 3 32H21C22.6533 32 24 30.6547 24 29V15C24 13.3453 22.6533 12 21 12ZM6.66667 8C6.66667 5.05867 9.05867 2.66667 12 2.66667C14.9413 2.66667 17.3333 5.05867 17.3333 8V12H6.66667V8ZM13.3333 22.296V25.3333C13.3333 26.0693 12.7373 26.6667 12 26.6667C11.2627 26.6667 10.6667 26.0693 10.6667 25.3333V22.296C9.87333 21.8333 9.33333 20.9827 9.33333 20C9.33333 18.5293 10.5293 17.3333 12 17.3333C13.4707 17.3333 14.6667 18.5293 14.6667 20C14.6667 20.9827 14.1267 21.8333 13.3333 22.296Z"
        fill="#255E17"
      />
    </svg>
  )
}

export default IconLock
