import { Container } from '@/components/layout/container'
import { Card, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const Home: React.FC = () => {
  const flowHome = [
    { title: 'Visão Geral', type: 'left', variant: 'default' },
    { title: 'Indicadores Chaves de Desempenho', type: 'right', variant: 'default' },
    { title: 'Campanhas Ativas', type: 'left', variant: 'mini' },
    { title: 'Valor total arrecadado', type: 'left', variant: 'mini' },
    { title: 'Ranking de Afiliados', type: 'right', variant: 'default' }
  ]
  return (
    <Container>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex  flex-col items-center justify-start gap-4">
          {flowHome
            .filter(({ type }) => type === 'left')
            .map(({ title, variant }, index) => (
              <Card
                key={index}
                className={cn(
                  'flex  w-full flex-col p-4',
                  variant === 'mini' ? 'h-[184px]' : 'h-96'
                )}
              >
                <CardTitle>{title}</CardTitle>
              </Card>
            ))}
        </div>
        <div className="flex flex-col items-center justify-start gap-4">
          {flowHome
            .filter(({ type }) => type === 'right')
            .map(({ title, variant }, index) => (
              <Card
                key={index}
                className={cn(
                  'flex  w-full flex-col p-4',
                  variant === 'mini' ? 'h-[184px]' : 'h-96'
                )}
              >
                <CardTitle>{title}</CardTitle>
              </Card>
            ))}
        </div>
      </div>
    </Container>
  )
}

export default Home
