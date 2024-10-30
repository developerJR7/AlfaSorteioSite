import { Button } from '@/components/ui/button'
import { DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { ChevronLeft } from 'lucide-react'

interface ModalConfirmProps {
  title: string
  contain: React.ReactNode
  handleFunc?: () => void
  back: () => void
  loading?: boolean
}

const ModalConfirm: React.FC<ModalConfirmProps> = ({
  title,
  contain,
  handleFunc,
  back,
  loading = false
}) => {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Button
          className="text-system-cinza hover:text-primary-hover m-0 w-fit p-0 transition-all duration-200 ease-in-out hover:bg-transparent"
          variant="ghost"
          onClick={back}
        >
          <ChevronLeft size={18} />
        </Button>
        <DialogTitle className="text-primary-default text-base font-semibold">
          {title}
        </DialogTitle>
        <DialogDescription>{''}</DialogDescription>
      </div>
      {contain}
      {handleFunc && (
        <div className="mt-4 flex items-center justify-end">
          <Button title="Prosseguir" onClick={handleFunc} />
        </div>
      )}
    </section>
  )
}

export default ModalConfirm
