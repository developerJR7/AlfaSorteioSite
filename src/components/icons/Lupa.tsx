import { FC } from 'react'
interface IconProps {
  size?: number
  color?: string
  fill?: string
  className?: string
}
const IconLupa: FC<IconProps> = ({ size, color, fill, className }) => {
  return (
    <svg
      width={size}
      height={size}
      color={fill}
      fill={color}
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M26.6406 16.3281C26.1662 16.3281 25.7812 16.7131 25.7812 17.1875C25.7812 17.6619 26.1662 18.0469 26.6406 18.0469C27.115 18.0469 27.5 17.6619 27.5 17.1875C27.5 16.7131 27.115 16.3281 26.6406 16.3281Z"
        fill={color}
      />
      <path
        d="M42.9929 38.1321L31.522 26.6612C33.3907 23.8464 34.375 20.5868 34.375 17.1875C34.375 7.71031 26.6647 0 17.1875 0C7.71031 0 0 7.71031 0 17.1875C0 26.6647 7.71031 34.375 17.1875 34.375C20.5868 34.375 23.8465 33.3906 26.6612 31.522L29.8318 34.6927C29.8323 34.6931 29.8327 34.6936 29.8332 34.6941L38.132 42.9929C38.7815 43.6423 39.6446 44 40.5625 44C41.4804 44 42.3435 43.6423 42.9926 42.9932C43.6422 42.3441 44 41.4809 44 40.5625C44 39.6441 43.6422 38.7809 42.9929 38.1321ZM26.257 29.7109L26.2568 29.7111C23.6042 31.6378 20.4682 32.6562 17.1875 32.6562C8.65803 32.6562 1.71875 25.717 1.71875 17.1875C1.71875 8.65803 8.65803 1.71875 17.1875 1.71875C25.717 1.71875 32.6562 8.65803 32.6562 17.1875C32.6562 20.4682 31.6378 23.6042 29.711 26.2569C28.747 27.5849 27.585 28.747 26.257 29.7109ZM28.06 30.49C28.9494 29.7624 29.7625 28.9493 30.49 28.06L32.9282 30.4981C32.1867 31.3732 31.3732 32.1868 30.4981 32.9282L28.06 30.49ZM41.7776 41.7776C41.4527 42.1024 41.0212 42.2812 40.5625 42.2812C40.1038 42.2812 39.6723 42.1024 39.3474 41.7776L31.7166 34.1468C32.5869 33.3999 33.3999 32.587 34.1467 31.7167L41.7777 39.3478C42.1024 39.6721 42.2812 40.1034 42.2812 40.5625C42.2812 41.0216 42.1024 41.4529 41.7776 41.7776Z"
        fill={color}
      />
      <path
        d="M17.1875 3.4375C9.60566 3.4375 3.4375 9.60566 3.4375 17.1875C3.4375 24.7693 9.60566 30.9375 17.1875 30.9375C24.7693 30.9375 30.9375 24.7693 30.9375 17.1875C30.9375 9.60566 24.7693 3.4375 17.1875 3.4375ZM17.1875 29.2188C10.5535 29.2188 5.15625 23.8215 5.15625 17.1875C5.15625 10.5535 10.5535 5.15625 17.1875 5.15625C23.8215 5.15625 29.2188 10.5535 29.2188 17.1875C29.2188 23.8215 23.8215 29.2188 17.1875 29.2188Z"
        fill={color}
      />
      <path
        d="M26.8181 13.4985C26.0781 11.5724 24.7896 9.9257 23.0918 8.73641C21.3537 7.51867 19.312 6.875 17.1875 6.875C16.713 6.875 16.3281 7.25983 16.3281 7.73438C16.3281 8.20892 16.713 8.59375 17.1875 8.59375C20.7194 8.59375 23.9449 10.8125 25.2137 14.115C25.345 14.4567 25.6706 14.6664 26.0161 14.6664C26.1186 14.6664 26.2228 14.6479 26.3241 14.6089C26.7671 14.4387 26.9883 13.9416 26.8181 13.4985Z"
        fill={color}
      />
    </svg>
  )
}

export default IconLupa