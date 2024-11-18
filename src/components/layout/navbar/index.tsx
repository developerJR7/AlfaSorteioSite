import IconLeafClover from '@/components/icons/LeaftClover'
import { itemsRoute } from '@/utils/SideBarItems'
import { Link, useLocation } from 'react-router-dom'

export const Navbar: React.FC = () => {
  const location = useLocation()
  const pathNameCurrent: string = location.pathname

  return (
    <nav className="relative flex h-24  w-dvw justify-center gap-1 bg-colorPrimary-500 text-white">
      <IconLeafClover
        color="white"
        className="absolute left-36 top-0 size-24  text-center"
      />
      {itemsRoute.map(({ title, path }, number) => (
        <Link
          key={number + title}
          to={path}
          className={`flex items-center gap-2 rounded-lg  p-2 text-xl capitalize transition-all duration-300 hover:text-slate-400 ${
            pathNameCurrent === path ? 'underline underline-offset-4' : ''
          }`}
        >
          {title}
        </Link>
      ))}
    </nav>
  )
}
