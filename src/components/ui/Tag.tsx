import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const tagVariants = cva(
  "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium gap-1",
  {
    variants: {
      variant: {
        default: "bg-gr-50 text-gr-300",
        positive: "bg-g-100 text-g-300",
        negative: "bg-r-50 text-r-300",
        neutral: "bg-n-40 text-n-300",
        info: "bg-b-40 text-b-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  icon?: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant, icon: Icon, children, ...props }, ref) => {
    return (
      <span
        className={cn(tagVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {Icon && <Icon className="w-3 h-3" />}
        {children}
      </span>
    )
  }
)
Tag.displayName = "Tag"

export { Tag, tagVariants }