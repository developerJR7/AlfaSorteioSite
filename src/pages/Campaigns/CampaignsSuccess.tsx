import IconRocket from '@/components/icons/Rocket'

const CampaignsSuccess: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-semibold text-[#255E17]">
          Parabéns! Sua campanha foi criada com sucesso
        </h3>
        <div className="flex w-9/12 flex-col gap-4 text-base font-normal text-black">
          <p>
            Sua campanha está pronta para decolar! Este é um marco importante, e
            agora é hora de compartilhar sua mensagem com o mundo. O que vem a
            seguir?
          </p>
          <p>
            1. <strong>Compartilhe nas Redes Sociais:</strong> Publique em todas as
            suas plataformas sociais e engaje seu público com conteúdos atraentes.
          </p>
          <p>
            2. <strong>Envie E-mails Promocionais:</strong> Notifique seus contatos
            através de e-mails personalizados.
          </p>
          <p>
            3. <strong>Crie Anúncios:</strong> Utilize anúncios pagos para alcançar
            um público mais amplo e gerar mais tráfego.
          </p>
          <p className="text-lg font-semibold">Vamos Começar!</p>
          <p>Divulgue o link de compartilhamento:</p>
          <p className="font-semibold text-[#255E17]">
            linkdecompartilhamento.site.com.br
          </p>
          <p>
            Quanto mais cedo você compartilhar, mais rápido você verá os resultados!
          </p>
          <p>Desejamos que sua campanha seja um sucesso!</p>
        </div>
      </div>
      <div className="flex justify-center">
        <IconRocket size={315} />
      </div>
    </div>
  )
}

export default CampaignsSuccess
