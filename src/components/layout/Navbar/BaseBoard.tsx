import { Button } from '@/components/ui/button'
import { useAdm } from '@/contexts/UserContext'
import { cn } from '@/lib/utils'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface ItemProps {
  icon: React.FC<App.IconProps>
  path: string
  title: string
  exit: boolean
}

export const BaseBoard: React.FC<ItemProps> = ({ icon: Icon, path, title }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { signOut } = useAdm()

  return (
    <li className="flex flex-col items-center justify-center">
      <Button
        className={cn(
          'flex h-14 w-16 flex-col items-center justify-center gap-1 rounded-xl border-2 border-white bg-transparent fill-white text-center text-[9px] font-bold text-white transition-all ease-in-out hover:bg-colorPrimary-500 hover:fill-colorSecondary-500 hover:text-colorSecondary-500 xl:h-14 xl:w-16',
          pathname === path &&
            'pointer-events-none bg-white fill-colorPrimary-500 text-colorPrimary-500'
        )}
        onClick={() => (path.length > 0 ? navigate(path) : signOut())}
      >
        <Icon size={24} stroke={2} />
        <span>{title}</span>
      </Button>
    </li>
  )
}
