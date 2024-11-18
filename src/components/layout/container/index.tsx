import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex w-full max-w-[1440px] flex-col justify-center gap-4  px-12 py-4 text-sm font-light text-colorPrimary-500 xl:text-xs">
      {children}
    </div>
  )
}
