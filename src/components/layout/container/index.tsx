import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex h-dvh w-full flex-col gap-4 overflow-auto bg-[#F1F5F9] p-8 text-sm font-light text-colorPrimary-500 xl:text-xs">
      {children}
    </div>
  )
}
