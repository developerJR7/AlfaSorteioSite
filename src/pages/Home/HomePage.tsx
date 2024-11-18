import { CarouselDemo } from '@/components/layout/carrossel'
import { Container } from '@/components/layout/container'
import { Separator } from '@/components/ui/separator'

const HomePage: React.FC = () => {
  return (
    <Container>
      <CarouselDemo />
      <h2 className="mb-4 text-lg font-semibold">Rifas disponíveis</h2>
      <div className="flex gap-4">
        <div className="flex h-64 w-1/2 rounded-lg border border-gray-200 bg-white p-4 shadow">
          <img
            src="/path/to/image1.jpg"
            alt="Imagem da Rifa 1"
            className="h-full w-1/3 rounded-lg object-cover"
          />
          <div className="ml-4 flex flex-col justify-between">
            <div>
              <h3 className="text-md mb-2 font-bold">Rifa 1</h3>
              <p className="text-sm text-gray-600">
                Informações sobre a Rifa 1. Aproveite essa oportunidade!
              </p>
            </div>
            <button className="mt-4 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
              Compre Agora
            </button>
          </div>
        </div>
        <div className="flex h-64 w-1/2 rounded-lg border border-gray-200 bg-white p-4 shadow">
          <img
            src="/path/to/image2.jpg"
            alt="Imagem da Rifa 2"
            className="h-full w-1/3 rounded-lg object-cover"
          />
          <div className="ml-4 flex flex-col justify-between">
            <div>
              <h3 className="text-md mb-2 font-bold">Rifa 2</h3>
              <p className="text-sm text-gray-600">
                Informações sobre a Rifa 2. Não perca essa chance!
              </p>
            </div>
            <button className="mt-4 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
              Compre Agora
            </button>
          </div>
        </div>
      </div>
      <Separator className="my-8 border-gray-300" />
      <h2 className="mb-4 text-lg font-semibold">Rifas concluídas</h2>
      <div className="flex gap-4">
        <div className="flex h-64 w-1/2 rounded-lg border border-gray-200 bg-white p-4 shadow">
          <img
            src="/path/to/completed-image1.jpg"
            alt="Imagem da Rifa Concluída 1"
            className="h-full w-1/3 rounded-lg object-cover"
          />
          <div className="ml-4 flex flex-col justify-between">
            <div>
              <h3 className="text-md mb-2 font-bold">Rifa Concluída 1</h3>
              <p className="text-sm text-gray-600">
                Informações sobre a Rifa Concluída 1.
              </p>
              <a href="/resultados/rifa1" className="text-lime-600 hover:underline">
                Confira o resultado
              </a>
            </div>
          </div>
        </div>
        <div className="flex h-64 w-1/2 rounded-lg border border-gray-200 bg-white p-4 shadow">
          <img
            src="/path/to/completed-image2.jpg"
            alt="Imagem da Rifa Concluída 2"
            className="h-full w-1/3 rounded-lg object-cover"
          />
          <div className="ml-4 flex flex-col justify-between">
            <div>
              <h3 className="text-md mb-2 font-bold">Rifa Concluída 2</h3>
              <p className="text-sm text-gray-600">
                Informações sobre a Rifa Concluída 2.
              </p>
              <a href="/resultados/rifa2" className="text-lime-600 hover:underline">
                Confira o resultado
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default HomePage
