import { FC } from 'react'
interface IconProps {
  size?: number
  color?: string
  fill?: string
  className?: string
}
const IconLottery: FC<IconProps> = ({ size, color, fill, className }) => {
  return (
    <svg
      width={size}
      height={size}
      color={fill}
      fill={color}
      viewBox="0 0 24 22"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.8118 9.49904L23.3431 8.68715C23.2809 8.57948 23.1786 8.50092 23.0585 8.46876C22.9383 8.43651 22.8104 8.45344 22.7028 8.51559L17.9679 11.2493H6.03201L1.2971 8.51559C1.18944 8.45344 1.06157 8.43661 0.941429 8.46876C0.82134 8.50097 0.718969 8.57948 0.656815 8.68715L0.188129 9.49904C-0.199559 10.1705 0.0312915 11.0323 0.702798 11.4199L5.43775 14.1536V20.1552C5.43775 20.9306 6.06857 21.5614 6.84394 21.5614H17.1561C17.9315 21.5614 18.5623 20.9306 18.5623 20.1552V14.1536L23.2973 11.42C23.6216 11.2326 23.8539 10.9293 23.9513 10.5658C24.0486 10.2023 23.9991 9.8234 23.8118 9.49904ZM11.7928 20.6239L17.6247 14.792V17.216L14.2168 20.6239H11.7928ZM17.6247 13.4662L10.467 20.6239H8.04292L16.4801 12.1868H17.6247V13.4662ZM7.65452 12.1868L6.37516 13.4661V12.1868H7.65452ZM1.17148 10.6081C1.06396 10.546 0.986803 10.4448 0.954226 10.3232C0.921649 10.2015 0.937867 10.0753 0.999974 9.96777L1.23434 9.56185L5.4377 11.9887V13.0712L1.17148 10.6081ZM6.37516 18.5418L8.06129 16.8557C8.24433 16.6726 8.24433 16.3758 8.06129 16.1927C7.87825 16.0096 7.58145 16.0097 7.39836 16.1927L6.37516 17.2159V14.7919L8.98038 12.1867H11.4044L10.3813 13.2098C10.1983 13.3928 10.1983 13.6896 10.3813 13.8727C10.4729 13.9642 10.5928 14.01 10.7128 14.01C10.8327 14.01 10.9527 13.9642 11.0442 13.8727L12.7301 12.1868H15.1542L6.73131 20.6097C6.52713 20.5591 6.37516 20.3748 6.37516 20.1552V18.5418ZM17.156 20.6239H15.5426L17.6247 18.5418V20.1552C17.6247 20.4137 17.4145 20.6239 17.156 20.6239ZM23.0457 10.3232C23.0131 10.4448 22.936 10.546 22.8284 10.6081L18.5622 13.0712V11.9887L22.7656 9.56185L22.9999 9.96782C23.062 10.0753 23.0783 10.2015 23.0457 10.3232Z"
        fill={color}
      />
      <path
        d="M9.83371 3.97638L9.69768 5.01349C9.66112 5.21144 9.68835 5.41145 9.77685 5.59308C9.93894 5.92597 10.2734 6.11989 10.6209 6.11989C10.7584 6.11989 10.898 6.08952 11.0296 6.02539L11.9889 5.55849L12.9761 6.02882C13.1409 6.10752 13.3248 6.13573 13.5078 6.11042C14.0192 6.03969 14.3777 5.56603 14.307 5.0539L14.1591 3.99597L14.8841 3.23128C15.0275 3.09281 15.1212 2.91606 15.1556 2.71905C15.1986 2.47245 15.143 2.22388 14.9991 2.01904C14.8552 1.81421 14.6401 1.67771 14.3947 1.63487L13.3434 1.44864L12.8214 0.488256C12.8213 0.488162 12.8213 0.488068 12.8212 0.487974C12.7336 0.327011 12.6017 0.196282 12.4398 0.109941C11.9846 -0.132815 11.4167 0.0399128 11.1738 0.495427L10.6718 1.43763L9.61753 1.63356C9.42849 1.66393 9.25576 1.75013 9.11748 1.88316C8.93726 2.05649 8.83531 2.28964 8.83048 2.53971C8.82565 2.78978 8.91841 3.02668 9.09217 3.20728L9.83371 3.97638ZM9.78224 2.5564L11.0651 2.318C11.2053 2.29194 11.3261 2.20344 11.3931 2.07754L11.9987 0.937676L12.6276 2.0947C12.6957 2.21999 12.8172 2.3075 12.9577 2.33234L14.2324 2.55733C14.2255 2.56385 14.2187 2.5706 14.2121 2.57754L13.3236 3.51477C13.2254 3.61826 13.1798 3.76085 13.1995 3.90213L13.3797 5.18261L12.1883 4.61507C12.0595 4.55371 11.9099 4.55432 11.7816 4.61681L10.6197 5.18322C10.622 5.17207 10.6239 5.16086 10.6254 5.14957L10.7926 3.87447C10.8112 3.73306 10.7643 3.59089 10.6653 3.48819L9.7664 2.55912C9.77165 2.55827 9.77694 2.55738 9.78224 2.5564Z"
        fill={color}
      />
      <path
        d="M11.5566 7.38914V9.56181C11.5566 9.82069 11.7664 10.0305 12.0253 10.0305C12.2842 10.0305 12.494 9.82069 12.494 9.56181V7.38914C12.494 7.13026 12.2842 6.92041 12.0253 6.92041C11.7664 6.92041 11.5566 7.13026 11.5566 7.38914Z"
        fill={color}
      />
      <path
        d="M5.88258 5.97138C5.75311 6.19557 5.82994 6.48225 6.05413 6.61167C7.05084 7.18713 7.70323 8.5765 7.75811 9.58732C7.77171 9.83715 7.97851 10.0306 8.22577 10.0306C8.23435 10.0306 8.24297 10.0304 8.2516 10.0299C8.5101 10.0159 8.70824 9.79497 8.69422 9.53646C8.62504 8.26264 7.85697 6.57004 6.52286 5.79982C6.29876 5.67036 6.01204 5.74723 5.88258 5.97138Z"
        fill={color}
      />
      <path
        d="M1.71048 4.87916L2.68179 5.25654L3.05893 6.22723C3.14546 6.45082 3.32329 6.62861 3.54693 6.71514C3.64775 6.75409 3.75143 6.77256 3.85357 6.77256C4.19579 6.77256 4.51936 6.56514 4.64971 6.22784L5.02709 5.25654L5.99779 4.87939C6.22142 4.79286 6.39921 4.61498 6.48564 4.39144C6.56781 4.17892 6.56228 3.94718 6.47008 3.73883C6.37788 3.53047 6.21012 3.3705 5.9984 3.28865L5.02709 2.91128L4.64985 1.94044C4.56333 1.71685 4.38549 1.53911 4.1619 1.45268C3.72326 1.28309 3.22838 1.50208 3.05916 1.93997L2.68179 2.91128L1.71113 3.28842C1.4875 3.37495 1.30967 3.55279 1.22323 3.77642C1.14111 3.98889 1.14664 4.22068 1.23884 4.42899C1.33095 4.63734 1.49875 4.79732 1.71048 4.87916ZM3.2137 3.71033C3.33628 3.6627 3.43326 3.56577 3.48088 3.44315L3.85446 2.48164L4.22804 3.44315C4.27566 3.56572 4.3726 3.6627 4.49522 3.71033L5.45673 4.08386L4.49522 4.45744C4.37265 4.50506 4.27566 4.602 4.22804 4.72462L3.85446 5.68613L3.48088 4.72462C3.43326 4.60204 3.33632 4.50506 3.2137 4.45744L2.25224 4.08386L3.2137 3.71033Z"
        fill={color}
      />
      <path
        d="M15.7483 10.0298C15.7569 10.0303 15.7655 10.0305 15.7741 10.0305C16.0213 10.0305 16.2282 9.83705 16.2418 9.58722C16.2966 8.57644 16.949 7.18703 17.9457 6.61156C18.1699 6.48215 18.2468 6.19547 18.1173 5.97128C17.9879 5.74703 17.7012 5.67025 17.477 5.79972C16.1429 6.56994 15.3748 8.26253 15.3056 9.53636C15.2916 9.79487 15.4898 10.0158 15.7483 10.0298Z"
        fill={color}
      />
      <path
        d="M18.0015 4.87918L18.9728 5.25656L19.3499 6.22712C19.4806 6.56503 19.8041 6.77254 20.1465 6.77254C20.2486 6.77254 20.3523 6.75407 20.4531 6.71512C20.6767 6.62868 20.8545 6.45085 20.9408 6.22787L21.3182 5.25656L22.2887 4.87947C22.7274 4.70988 22.9463 4.21508 22.7767 3.7763C22.6903 3.55277 22.5125 3.37493 22.2895 3.28863L21.3182 2.91126L20.9411 1.9407C20.7716 1.50201 20.2768 1.28316 19.838 1.45261C19.6146 1.53895 19.4369 1.71655 19.3503 1.9399L18.9729 2.91121L18.0024 3.28826C17.5637 3.4578 17.3447 3.95264 17.5143 4.39133C17.6007 4.61505 17.7785 4.79289 18.0015 4.87918ZM19.5047 3.71035C19.6273 3.66273 19.7243 3.5658 19.7719 3.44318L20.1455 2.48166L20.519 3.44318C20.5667 3.56575 20.6636 3.66273 20.7862 3.71035L21.7477 4.08389L20.7862 4.45747C20.6636 4.50509 20.5667 4.60202 20.519 4.72464L20.1455 5.68615L19.7719 4.72464C19.7243 4.60207 19.6274 4.50509 19.5047 4.45747L18.5432 4.08389L19.5047 3.71035Z"
        fill={color}
      />
      <path
        d="M9.22161 15.5017C9.4805 15.5017 9.69036 15.2918 9.69036 15.033C9.69036 14.7741 9.4805 14.5642 9.22161 14.5642H9.22128C8.96239 14.5642 8.75272 14.7741 8.75272 15.033C8.75272 15.2918 8.96272 15.5017 9.22161 15.5017Z"
        fill={color}
      />
    </svg>
  )
}

export default IconLottery