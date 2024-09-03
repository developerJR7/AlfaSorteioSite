import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex h-dvh w-full max-w-[1440px] flex-col gap-4 overflow-auto p-8 text-sm font-light text-colorPrimary-500 xl:text-xs">
      {children}
    </div>
  )
}
