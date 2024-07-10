import React, { ReactNode } from 'react'

interface IAdminContainer {
  children: ReactNode
}

export const AdminContainer: React.FC<IAdminContainer> = ({ children }) => {
  return (
    <div className="flex min-h-[calc(100vh-164px)] flex-col gap-4 rounded-2xl bg-white p-8 text-sm font-light text-colorPrimary-500 xl:text-xs">
      {children}
    </div>
  )
}
