import { FC } from 'react'
interface IconProps {
  size?: number
  color?: string
  fill?: string
  className?: string
}
const IconRocket: FC<IconProps> = () => {
  return (
    <svg
      width="315"
      height="315"
      viewBox="0 0 315 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="315" height="315" fill="url(#pattern0_58_122)" />
      <defs>
        <pattern
          id="pattern0_58_122"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_58_122" transform="scale(0.0025)" />
        </pattern>
        <image
          id="image0_58_122"
          width="400"
          height="400"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default IconRocket
