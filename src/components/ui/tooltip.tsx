import * as React from "react"
import { cn } from "../../lib/utils"

export interface TooltipProps {
  children: React.ReactNode
  content: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  className?: string
  disabled?: boolean
}

const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content, 
  side = 'right', 
  className,
  disabled = false 
}) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const sideClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2'
  }

  if (disabled) {
    return <>{children}</>
  }

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      {isVisible && (
        <div 
          className={cn(
            "absolute z-50 px-2 py-1 bg-n-500 text-white text-xs font-poppins font-normal rounded-lg opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap",
            sideClasses[side],
            className
          )}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  )
}

export { Tooltip }