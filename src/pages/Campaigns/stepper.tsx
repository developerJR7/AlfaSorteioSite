import { cn } from '@/lib/utils'

interface StepperProps {
  color: string
  currentStep: number
  stepsControl: {
    number: number
    href: string
    status: string
    text: string
  }[]
}

export const Stepper: React.FC<StepperProps> = ({
  color,
  currentStep,
  stepsControl
}) => {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {stepsControl.map((step, stepIdx) => (
          <li
            key={stepIdx}
            className={cn(
              stepIdx !== stepsControl.length - 1 ? 'pr-8 sm:pr-20' : '',
              'relative'
            )}
          >
            {step.number < currentStep ? (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className={cn('h-0.5 w-full', color)} />
                </div>
                <a
                  href="#"
                  className={cn(
                    'relative flex h-8 w-8 items-center justify-center rounded-full text-white ',
                    color
                  )}
                >
                  {step.number}
                  <span className="sr-only">{step.text}</span>
                </a>
              </>
            ) : step.number === currentStep ? (
              <div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  aria-current="step"
                  className={cn(
                    'relative flex h-8 w-8 items-center justify-center rounded-full text-white ',
                    color
                  )}
                >
                  <span className="">{step.number}</span>
                </a>
                {/* <h2 className="absolute bottom-0 w-14 text-xs">{step.text}</h2> */}
              </div>
            ) : (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                >
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                  />
                  <span className="sr-only">{step.text}</span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
