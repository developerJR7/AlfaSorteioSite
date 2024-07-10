import { FC } from 'react'

export const IconUserCircle: FC<App.IconProps> = ({
  size,
  color,
  fill,
  className
}) => {
  return (
    <svg
      width={size}
      height={size}
      color={fill}
      fill={color}
      viewBox="1 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22.7782 3.22182C20.7006 1.14421 17.9382 0 15 0C12.0618 0 9.29942 1.14421 7.22182 3.22182C5.14421 5.29942 4 8.06184 4 11C4 13.9382 5.14421 16.7006 7.22182 18.7782C9.29942 20.8558 12.0618 22 15 22C17.9382 22 20.7006 20.8558 22.7782 18.7782C24.8558 16.7006 26 13.9382 26 11C26 8.06184 24.8558 5.29942 22.7782 3.22182ZM8.77406 18.4464C9.13728 15.321 11.8243 12.9081 15 12.9081C16.6741 12.9081 18.2483 13.5603 19.4325 14.7443C20.4329 15.7449 21.0638 17.0512 21.2261 18.4462C19.5392 19.8589 17.3673 20.7109 15 20.7109C12.6327 20.7109 10.4609 19.8591 8.77406 18.4464ZM15 11.5804C13.1579 11.5804 11.659 10.0815 11.659 8.23943C11.659 6.39714 13.1579 4.89844 15 4.89844C16.8421 4.89844 18.341 6.39714 18.341 8.23943C18.341 10.0815 16.8421 11.5804 15 11.5804ZM22.3356 17.3565C22.0071 16.0322 21.3221 14.8111 20.3439 13.8329C19.5517 13.0407 18.6144 12.4463 17.5922 12.0739C18.821 11.2405 19.6301 9.83263 19.6301 8.23943C19.6301 5.68648 17.5529 3.60938 15 3.60938C12.4471 3.60938 10.3699 5.68648 10.3699 8.23943C10.3699 9.83347 11.1796 11.2419 12.4095 12.0751C11.469 12.4178 10.5987 12.9477 9.84996 13.6453C8.76567 14.655 8.01271 15.9426 7.66359 17.3555C6.18503 15.651 5.28906 13.4282 5.28906 11C5.28906 5.64536 9.64536 1.28906 15 1.28906C20.3546 1.28906 24.7109 5.64536 24.7109 11C24.7109 13.4287 23.8146 15.652 22.3356 17.3565Z"
        fill={color}
      />
    </svg>
  )
}
