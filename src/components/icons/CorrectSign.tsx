import { IconType } from '@/types/iconType'
import { FC } from 'react'

const IconCorrectSign: FC<IconType> = ({ size = 32, fill = 'none', className }) => {
  return (
    <svg
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 30 27"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.6132 26.9763C18.0269 26.9763 23.2263 21.7769 23.2263 15.3631C23.2263 8.94933 18.0269 3.74994 11.6132 3.74994C5.19939 3.74994 0 8.94933 0 15.3631C0 21.7769 5.19939 26.9763 11.6132 26.9763Z"
        fill="#B0EF8F"
      />
      <path
        d="M11.7445 24.3392L11.5972 24.0882C9.34716 20.2547 3.36808 12.1193 3.30769 12.0376L3.22144 11.9204L5.25848 9.90724L11.7066 14.4098C15.7666 9.14145 19.5542 5.52289 22.0249 3.4098C24.7276 1.09829 26.4868 0.0341449 26.5046 0.0239475L26.5446 0H30L29.6699 0.293948C21.1812 7.85487 11.9803 23.9249 11.8886 24.0863L11.7445 24.3392Z"
        fill="#009045"
      />
    </svg>
  )
}
export default IconCorrectSign
