import * as React from "react"
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react"
import { cn } from "../../lib/utils"
import { Tag } from "./Tag"

export interface KPICardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ComponentType<{ className?: string }>
  name: string
  currentValue: string
  trendValue: string
  trendType: 'positive' | 'negative' | 'neutral'
  children?: React.ReactNode
}

const KPICard = React.forwardRef<HTMLDivElement, KPICardProps>(
  ({ className, icon: Icon, name, currentValue, trendValue, trendType, children, ...props }, ref) => {
    // Get the appropriate icon based on trend type
    const getTrendIcon = () => {
      switch (trendType) {
        case 'positive':
          return ArrowUpRight
        case 'negative':
          return ArrowDownRight
        case 'neutral':
        default:
          return Minus
      }
    }

    const TrendIcon = getTrendIcon()

    return (
      <div
        ref={ref}
        className={cn(
          "w-[16.75rem] h-[10.75rem] bg-white rounded-xl shadow-sm p-4 flex flex-col",
          className
        )}
        {...props}
      >
        {/* Top section - Icon and Name */}
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-5 h-5 text-b-200" />
          <span className="text-n-500 text-base font-medium font-poppins">
            {name}
          </span>
        </div>

        {/* Middle section - Optional content (chart/list) */}
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>

        {/* Bottom section - Current value and trend */}
        <div className="flex items-end justify-between mt-auto">
          <span className="text-3xl font-semibold text-n-500 font-poppins">
            {currentValue}
          </span>
          <Tag variant={trendType} icon={TrendIcon}>
            {trendValue}
          </Tag>
        </div>
      </div>
    )
  }
)
KPICard.displayName = "KPICard"

export { KPICard }