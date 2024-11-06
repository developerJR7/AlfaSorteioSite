import { cn } from '@/lib/utils'
import React from 'react'

interface StepperProps {
  currentStep: number
  stepsControl: {
    number: number
    text: string
  }[]
}

const StepperPageCampaigns: React.FC<StepperProps> = ({
  currentStep,
  stepsControl
}) => {
  const calcProgressBefore = (current: number, total: number): string => {
    const cl = (current / total) * 100
    return `before:w-[${cl}%]`
  }

  return (
    <nav className="relative m-auto mb-12 flex w-9/12 items-center justify-between">
      {stepsControl.map(({ text, number }, index) => (
        <React.Fragment key={index}>
          {index < stepsControl.length - 1 && (
            <div
              className={cn(
                'absolute top-[50%] w-full transform border-[1px] border-dashed before:absolute before:top-[50%] before:z-[11] before:block before:w-[0px] before:border-[1px] before:border-dashed',
                currentStep > 1 && 'before:border-[#255E17]',
                calcProgressBefore(currentStep - 1, stepsControl.length - 1)
              )}
            />
          )}
          <div
            key={index}
            className="z-10 flex w-fit flex-col items-center justify-center gap-2"
          >
            <div
              className={cn(
                'grid size-14 cursor-default place-items-center rounded-full border-2  text-xl font-bold transition-all duration-200 ease-in-out',
                number > currentStep &&
                  'border-[#A0AEC0] bg-[#F1F5F9] text-[#A0AEC0]',
                number < currentStep && 'border-[#255E17] bg-[#255E17] text-white',
                number === currentStep &&
                  'border-[#255E17] bg-[#B4FFA1] text-[#255E17]'
              )}
            >
              {number}
            </div>
            <label
              htmlFor=""
              className={cn(
                'absolute bottom-[-38px] h-8 w-32 text-center text-xs font-medium text-[#A0AEC0]',
                number === currentStep && 'text-[#255E17]'
              )}
            >
              {text}
            </label>
          </div>
        </React.Fragment>
      ))}
    </nav>
  )
}

export default StepperPageCampaigns
