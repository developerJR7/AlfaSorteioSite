import {
  IconDiscount,
  IconExit,
  IconHome,
  IconLottery,
  IconMoney,
  IconMoneyShare,
  IconNotifications,
  IconReports,
  IconSettings,
  IconSuport,
  IconTicket
} from '@/components/icons'

export const itemsRoute = [
  {
    title: 'Dashboard',
    icon: IconHome,
    path: '/home',
    session: 'pages'
  },
  {
    title: 'Campanha',
    icon: IconTicket,
    path: '/campaigns',
    session: 'pages'
  },
  {
    title: 'Promoções',
    icon: IconDiscount,
    path: '/promotions',
    session: 'pages'
  },
  {
    title: 'Sortear',
    icon: IconLottery,
    path: '/lottery',
    session: 'pages'
  },
  {
    title: 'Afiliados',
    icon: IconMoneyShare,
    path: '/affiliates',
    session: 'pages'
  },
  {
    title: 'Financeiro',
    icon: IconMoney,
    path: '/finance',
    session: 'control'
  },
  {
    title: 'Relátorios',
    icon: IconReports,
    path: '/reports',
    session: 'control'
  },
  {
    title: 'Notificações',
    icon: IconNotifications,
    path: '/notifications',
    session: 'actions'
  },
  {
    title: 'Configuarações',
    icon: IconSettings,
    path: '/config',
    session: 'actions'
  },
  {
    title: 'Suporte',
    icon: IconSuport,
    path: '/suport',
    session: 'actions'
  },
  {
    title: 'Sair',
    icon: IconExit,
    path: '/exit',
    session: 'actions'
  }
]
