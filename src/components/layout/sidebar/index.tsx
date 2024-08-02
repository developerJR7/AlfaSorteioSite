import IconLeafClover from '@/components/icons/LeaftClover'
import { useAlfa } from '@/contexts/UserContent'
import { itemsRoute } from '@/utils/SideBarItems'
import { Separator } from '@radix-ui/react-separator'
import { Link, useLocation } from 'react-router-dom'

export const Sidebar: React.FC = () => {
  const { signOut } = useAlfa()
  const location = useLocation()
  const pathNameCurrent: string = location.pathname // Ajustei para garantir a consistência do nome.

  return (
    <nav className="flex h-dvh w-72 flex-col justify-start gap-1 bg-gradient-to-b from-[#255E17] to-[#769545] px-4 py-2 text-xl text-white">
      <IconLeafClover
        color="white"
        className="mb-8 mt-8 size-12 w-full text-center"
      />
      {itemsRoute
        .filter(({ session }) => session === 'pages')
        .map(({ title, path, icon: Icon }, number) => (
          <Link
            key={number + title}
            to={path}
            className={`flex items-center gap-2 rounded-lg fill-white p-2 text-sm lowercase transition-all duration-300 hover:bg-white hover:fill-colorPrimary-500 hover:text-colorPrimary-500 ${
              pathNameCurrent === path ? 'bg-white text-colorPrimary-500' : ''
            }`}
          >
            <Icon
              color={pathNameCurrent === path ? '#255E17' : ''}
              className="size-5"
            />
            {title}
          </Link>
        ))}
      <Separator className="my-[1px] h-[2px] bg-white" />
      {itemsRoute
        .filter(({ session }) => session === 'control')
        .map(({ title, path, icon: Icon }, number) => (
          <Link
            key={number + title}
            to={path}
            className={`flex items-center gap-2 rounded-lg fill-white p-2 text-sm lowercase transition-all duration-300 hover:bg-white hover:fill-colorPrimary-500 hover:text-colorPrimary-500 ${
              pathNameCurrent === path ? 'bg-white text-colorPrimary-500' : ''
            }`}
          >
            <Icon
              color={pathNameCurrent === path ? '#255E17' : ''}
              className="size-5"
            />
            {title}
          </Link>
        ))}
      <Separator className="my-[1px] h-[2px] bg-white" />
      {itemsRoute
        .filter(({ session }) => session === 'actions')
        .map(({ title, path, icon: Icon }, number) => (
          <Link
            key={number + title}
            to={path}
            onClick={() => path === '/exit' && signOut()}
            className={`flex items-center gap-2 rounded-lg fill-white p-2 text-sm lowercase transition-all duration-300 hover:bg-white hover:fill-colorPrimary-500 hover:text-colorPrimary-500 ${
              pathNameCurrent === path ? 'bg-white text-colorPrimary-500' : ''
            }`}
          >
            <Icon
              color={pathNameCurrent === path ? '#255E17' : ''}
              className="size-5"
            />
            {title}
          </Link>
        ))}
    </nav>
  )
}
