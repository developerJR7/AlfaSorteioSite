import { IconProps } from '@/components/icons/leafClover'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

interface ICardForLogin {
  title: string
  option: string
  logo: React.FC<IconProps>
  content: React.ReactNode
  footer: React.ReactNode
}

export const CardForLogin: React.FC<ICardForLogin> = ({
  title,
  option,
  logo: Logo,
  content,
  footer
}) => {
  return (
    <Card className="flex w-[498px] max-w-[884px] flex-col items-center rounded-2xl border-none bg-white px-4 py-2 transition-all">
      <CardHeader>
        <CardTitle className="mb-2 flex justify-between">
          <div className="flex flex-col items-start gap-2">
            <span className="text-shadow-4x  text-center text-3xl font-semibold text-colorPrimary-500">
              {title}
            </span>
            <span className="text-shadow-4x text-lg font-light ">{option}</span>
          </div>
          <div className="flex items-start gap-2">
            <Logo className="size-8 fill-[#A0AEC0]" />
            <h2 className="font-kanit m-0 flex  flex-col items-end p-0 text-3xl font-normal text-[#255E17] opacity-100">
              Alfa
              <span className="font-hubballi mt-[-8px] text-xs font-normal">
                Sorteios
              </span>
            </h2>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex w-full justify-end">{footer}</CardFooter>
    </Card>
  )
}
