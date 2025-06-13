import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:shadow-focus-normal disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-p-400 text-white hover:bg-p-300 active:bg-p-500",
        destructive: "bg-r-400 text-white hover:bg-r-300 active:bg-r-500",
        outline: "border border-n-200 bg-white hover:bg-n-40 hover:text-n-500 active:bg-n-50",
        secondary: "bg-b-200 text-white hover:bg-b-300 active:bg-b-400",
        ghost: "hover:bg-n-40 hover:text-n-500 active:bg-n-50",
        link: "text-p-300 underline-offset-4 hover:underline hover:text-p-400 active:text-p-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }