import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

const CampaignsSuccess: React.FC = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card className="h-screen w-full p-6 shadow-lg">
        <CardTitle className="text-3xl text-[#255E17]">
          Parabéns! Sua campanha foi criada com sucesso
        </CardTitle>
        <CardHeader>
          <p>
            Sua campanha está pronta para decolar! Este é um marco importante, e
            agora é hora de compartilhar sua mensagem com o mundo. O que vem a
            seguir?
          </p>
          <p>
            1. Compartilhe nas Redes Sociais: Publique em todas as suas plataformas
            sociais e engaje seu público com conteúdos atraentes.
          </p>
          <p>
            2. Envie E-mails Promocionais: Notifique seus contatos através de e-mails
            personalizados.
          </p>
          <p>
            3. Crie Anúncios: Utilize anúncios pagos para alcançar um público mais
            amplo e gerar mais tráfego.
          </p>
          <p>
            Vamos Começar! Divulgue o link de compartilhamento:
            linkdecompartilhamento.site.com.br
          </p>
          <p>
            Quanto mais cedo você compartilhar, mais rápido você verá os resultados!
            Desejamos que sua campanha seja um sucesso!
          </p>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  )
}

export default CampaignsSuccess
