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
  content: React.ReactNode
  footer: React.ReactNode
}

export const CardForLogin: React.FC<ICardForLogin> = ({
  title,
  option,
  content,
  footer
}) => {
  return (
    <Card className="flex w-[498px] max-w-[884px] flex-col items-center rounded-2xl border-none bg-white px-4 py-2 transition-all">
      <CardHeader>
        <CardTitle className="mb-2 flex justify-between">
          <span className="text-shadow-4x w-full text-center text-3xl font-light text-colorPrimary-500">
            {title}
          </span>
          <span className="text-shadow-4x text-3xl font-light text-colorPrimary-500">
            {option}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex w-full justify-end">{footer}</CardFooter>
    </Card>
  )
}
