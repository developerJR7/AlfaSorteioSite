import { IconDiscount } from '@/components/icons'
import IconLupa from '@/components/icons/Lupa'
import { Container } from '@/components/layout/container'
import { DataTable } from '@/components/Table'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { toast } from '@/components/ui/use-toast'
import { listPromotions } from '@/hooks/promotionsApi'
import { ColumnsPromotions } from '@/pages/Promotions/ColumnsPromotions'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PromotionsList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'closed'>('active')
  const { data: promotionsData, isLoading, isError } = listPromotions()

  useEffect(() => {
    if (isError) {
      toast({
        variant: 'destructive',
        title: 'Failed to load promotions list.',
        description: 'Please try again later!'
      })
    }
  }, [isError])

  return (
    <Container>
      <h4 className="mb-4 flex items-center text-xl font-semibold text-[#255E17]">
        <IconDiscount className="mr-2 size-7" />
        Promoções
      </h4>
      {isLoading ? (
        <Skeleton className="h-8 w-5/12 max-w-[1330px] rounded-md" />
      ) : (
        <>
          <Card className="relative flex min-h-80 w-full flex-col  p-4">
            <div className=" mb-8 flex items-center">
              <button
                className={`rounded px-2 py-1 text-sm font-semibold ${
                  activeTab === 'active'
                    ? 'bg-[#255E17] text-white shadow'
                    : 'text-[#A0AEC0]'
                }`}
                onClick={() => setActiveTab('active')}
              >
                Em Andamento
              </button>
              <button
                className={`rounded px-2 py-1 text-sm font-semibold ${
                  activeTab === 'closed'
                    ? 'bg-[#255E17] text-white shadow'
                    : 'text-[#A0AEC0]'
                }`}
                onClick={() => setActiveTab('closed')}
              >
                Encerradas
              </button>
            </div>

            {promotionsData ? (
              <DataTable columns={ColumnsPromotions} data={promotionsData || []} />
            ) : (
              <div className="flex flex-1 items-center justify-center">
                <div className="text-center">
                  <IconLupa className="mx-auto mb-2 size-9 fill-[#A0AEC0]" />
                  <p className="text-xl font-semibold text-[#A0AEC0]">
                    No {activeTab === 'active' ? 'active' : 'closed'} promotions
                    found
                  </p>
                </div>
              </div>
            )}

            <Link
              className="absolute right-4 top-4 rounded-lg bg-gradient-to-r from-[#FEEA8C] to-[#F9D94B] px-6 py-1 text-lg font-semibold text-[#3D3D3D] shadow-md transition-all duration-300 hover:text-white"
              to={'/promotions/configpromotions'}
            >
              + Nova
            </Link>
          </Card>
        </>
      )}
    </Container>
  )
}

export default PromotionsList
