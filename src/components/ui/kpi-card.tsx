import * as React from "react"
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "./card"
import { Badge } from "./badge"
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area } from "recharts"
import { Info, ArrowUpRight, ArrowDownRight, Minus, DivideIcon as LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"

export interface KPICardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  currentValue: string
  trendValue: string
  trendType: 'positive' | 'negative' | 'neutral'
  chartData?: Array<{ [key: string]: any }>
  chartKey?: string
  children?: React.ReactNode
  icon: LucideIcon
  infoIcon?: boolean
}

const KPICard = React.forwardRef<HTMLDivElement, KPICardProps>(
  ({ 
    className, 
    title, 
    currentValue, 
    trendValue, 
    trendType, 
    chartData, 
    chartKey = 'value', 
    children, 
    icon: Icon, 
    infoIcon = false,
    ...props 
  }, ref) => {
    
    // Get trend icon based on type
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

    // Get badge variant based on trend type
    const getBadgeVariant = () => {
      switch (trendType) {
        case 'positive':
          return 'default' // We'll override with custom classes
        case 'negative':
          return 'destructive' // We'll override with custom classes
        case 'neutral':
        default:
          return 'secondary' // We'll override with custom classes
      }
    }

    // Get badge classes based on trend type
    const getBadgeClasses = () => {
      switch (trendType) {
        case 'positive':
          return 'bg-g-100 text-g-300 border-g-200 hover:bg-g-100'
        case 'negative':
          return 'bg-r-100 text-r-300 border-r-200 hover:bg-r-100'
        case 'neutral':
        default:
          return 'bg-n-50 text-n-300 border-n-100 hover:bg-n-50'
      }
    }

    const TrendIcon = getTrendIcon()

    return (
      <Card 
        ref={ref} 
        className={cn("bg-white rounded-xl shadow-sm w-[16.75rem] h-[10.75rem]", className)} 
        {...props}
      >
        {/* Top Section - Header with Icon and Title */}
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-2">
            <Icon className="w-4 h-4 text-n-300" />
            <CardTitle className="text-sm font-poppins font-medium text-n-400">
              {title}
            </CardTitle>
          </div>
          {infoIcon && (
            <Info className="w-4 h-4 text-n-200" />
          )}
        </CardHeader>

        {/* Middle Section - Chart or Children (Conditional) */}
        {(chartData || children) && (
          <CardContent className="pb-2">
            {chartData && (
              <div className="h-16 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4D3EE0" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#4D3EE0" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis hide />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #D1D5DC',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey={chartKey} 
                      stroke="#4D3EE0" 
                      strokeWidth={2}
                      fill="url(#chartGradient)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
            {children && !chartData && (
              <div className="space-y-1">
                {children}
              </div>
            )}
          </CardContent>
        )}

        {/* Bottom Section - Current Value and Trend Badge */}
        <CardFooter className="flex items-center justify-between pt-0">
          <div className="text-2xl font-poppins font-semibold text-n-500">
            {currentValue}
          </div>
          <Badge 
            variant={getBadgeVariant()}
            className={cn(
              "flex items-center space-x-1 px-2 py-1",
              getBadgeClasses()
            )}
          >
            <TrendIcon className="w-3 h-3" />
            <span className="text-xs font-poppins font-medium">{trendValue}</span>
          </Badge>
        </CardFooter>
      </Card>
    )
  }
)

KPICard.displayName = "KPICard"

export { KPICard }