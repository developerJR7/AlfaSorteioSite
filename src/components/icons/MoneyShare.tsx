import { FC } from 'react'
interface IconProps {
  size?: number
  color?: string
  fill?: string
  className?: string
}
const IconMoneyShare: FC<IconProps> = ({ size, color, fill, className }) => {
  return (
    <svg
      width={size}
      height={size}
      color={fill}
      fill={color}
      viewBox="1 1 21 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.8551 15.7688C18.4288 15.7732 18.0102 15.8823 17.636 16.0865L16.0254 14.4832C16.9016 13.3774 17.3783 12.0079 17.3783 10.5969C17.3783 9.18604 16.9016 7.81653 16.0254 6.71066L17.636 5.10738C18.1884 5.4076 18.8305 5.49878 19.4447 5.36422C20.0589 5.22965 20.604 4.87835 20.9803 4.37465C21.3566 3.87095 21.5388 3.24856 21.4936 2.62145C21.4485 1.99434 21.1789 1.40449 20.7343 0.959909C20.2898 0.515328 19.6999 0.245774 19.0728 0.200608C18.4457 0.155443 17.8233 0.337689 17.3196 0.713974C16.8159 1.09026 16.4646 1.6354 16.33 2.24956C16.1955 2.86372 16.2867 3.50581 16.5869 4.05823L14.9836 5.6689C13.8777 4.7927 12.5082 4.31592 11.0973 4.31592C9.6864 4.31592 8.31689 4.7927 7.21103 5.6689L5.60775 4.05823C5.90797 3.50581 5.99915 2.86372 5.86458 2.24956C5.73002 1.6354 5.37872 1.09026 4.87502 0.713974C4.37132 0.337689 3.74893 0.155443 3.12182 0.200608C2.49471 0.245774 1.90486 0.515328 1.46028 0.959909C1.01569 1.40449 0.74614 1.99434 0.700974 2.62145C0.655809 3.24856 0.838056 3.87095 1.21434 4.37465C1.59062 4.87835 2.13576 5.22965 2.74993 5.36422C3.36409 5.49878 4.00618 5.4076 4.5586 5.10738L6.16927 6.71066C5.29307 7.81653 4.81629 9.18604 4.81629 10.5969C4.81629 12.0079 5.29307 13.3774 6.16927 14.4832L4.5586 16.0865C4.00618 15.7863 3.36409 15.6951 2.74993 15.8297C2.13576 15.9642 1.59062 16.3155 1.21434 16.8192C0.838056 17.3229 0.655809 17.9453 0.700974 18.5724C0.74614 19.1995 1.01569 19.7894 1.46028 20.234C1.90486 20.6786 2.49471 20.9481 3.12182 20.9933C3.74893 21.0384 4.37132 20.8562 4.87502 20.4799C5.37872 20.1036 5.73002 19.5585 5.86458 18.9443C5.99915 18.3302 5.90797 17.6881 5.60775 17.1357L7.21103 15.525C8.31689 16.4012 9.6864 16.878 11.0973 16.878C12.5082 16.878 13.8777 16.4012 14.9836 15.525L16.5869 17.1357C16.3218 17.6337 16.2273 18.2049 16.318 18.7617C16.4086 19.3185 16.6794 19.8303 17.0888 20.2184C17.4982 20.6066 18.0236 20.8498 18.5844 20.9108C19.1453 20.9717 19.7107 20.8471 20.1939 20.5559C20.6771 20.2647 21.0515 19.8231 21.2596 19.2987C21.4678 18.7743 21.4982 18.1962 21.3463 17.6529C21.1943 17.1095 20.8684 16.6311 20.4184 16.2907C19.9684 15.9504 19.4193 15.7671 18.8551 15.7688ZM10.7279 9.85811H11.4224C11.8666 9.84348 12.3 9.99617 12.6369 10.2859C12.9739 10.5757 13.1897 10.9814 13.2418 11.4227C13.2938 11.8641 13.1782 12.3089 12.9179 12.669C12.6576 13.0292 12.2715 13.2785 11.8361 13.3676C11.8391 13.4646 11.8228 13.5613 11.7884 13.652C11.7539 13.7428 11.702 13.8258 11.6354 13.8965C11.5689 13.9672 11.4891 14.024 11.4005 14.0639C11.312 14.1037 11.2165 14.1257 11.1195 14.1286C11.0225 14.1315 10.9258 14.1153 10.835 14.0808C10.7443 14.0464 10.6612 13.9944 10.5905 13.9279C10.5199 13.8613 10.463 13.7815 10.4232 13.693C10.3834 13.6044 10.3614 13.5089 10.3585 13.4119H9.70091C9.50496 13.4119 9.31703 13.3341 9.17847 13.1955C9.03991 13.057 8.96207 12.869 8.96207 12.6731C8.96207 12.4771 9.03991 12.2892 9.17847 12.1506C9.31703 12.0121 9.50496 11.9342 9.70091 11.9342H11.4372C11.4804 11.9411 11.5246 11.9384 11.5667 11.9265C11.6088 11.9146 11.6479 11.8937 11.6812 11.8653C11.7144 11.8368 11.7411 11.8015 11.7595 11.7618C11.7778 11.722 11.7873 11.6788 11.7873 11.635C11.7873 11.5912 11.7778 11.548 11.7595 11.5082C11.7411 11.4685 11.7144 11.4332 11.6812 11.4047C11.6479 11.3763 11.6088 11.3554 11.5667 11.3435C11.5246 11.3316 11.4804 11.329 11.4372 11.3358H10.7427C10.3015 11.342 9.87392 11.1835 9.54336 10.8914C9.21279 10.5992 9.00302 10.1943 8.95501 9.75572C8.907 9.31716 9.0242 8.87645 9.28372 8.51967C9.54324 8.1629 9.92644 7.91568 10.3585 7.8263C10.3526 7.63035 10.4248 7.44009 10.5592 7.29738C10.6936 7.15466 10.8792 7.07118 11.0751 7.0653C11.2711 7.05942 11.4614 7.13163 11.6041 7.26603C11.7468 7.40043 11.8303 7.58602 11.8361 7.78197H12.4937C12.6897 7.78197 12.8776 7.85982 13.0162 7.99837C13.1547 8.13693 13.2326 8.32486 13.2326 8.52081C13.2326 8.71676 13.1547 8.90469 13.0162 9.04325C12.8776 9.18181 12.6897 9.25965 12.4937 9.25965H10.7501C10.7068 9.25283 10.6626 9.25547 10.6205 9.26737C10.5784 9.27928 10.5393 9.30017 10.5061 9.32861C10.4728 9.35705 10.4461 9.39236 10.4278 9.43211C10.4095 9.47186 10.4 9.51511 10.4 9.55888C10.4 9.60265 10.4095 9.6459 10.4278 9.68565C10.4461 9.7254 10.4728 9.76071 10.5061 9.78915C10.5393 9.81759 10.5784 9.83848 10.6205 9.85038C10.6626 9.86229 10.7068 9.86492 10.7501 9.85811H10.7279Z"
        fill={color}
      />
    </svg>
  )
}

export default IconMoneyShare