import { Link } from 'react-router-dom'

const itemsRoute = [
  {
    title: 'Home',
    path: '/home'
  },
  {
    title: 'Campanha',
    path: '/campaigns'
  }
]

export const Sidebar: React.FC = () => {
  return (
    <nav className="flex h-dvh w-72 flex-col justify-start gap-2 bg-gradient-to-b from-[#255E17] to-[#769545] px-4 py-2 text-xl text-white">
      {itemsRoute.map(({ title, path }, number) => (
        <Link key={number} to={path}>
          {title}
        </Link>
      ))}
    </nav>
  )
}
