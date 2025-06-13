import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const inputVariants = cva(
  "flex w-full rounded-xl border bg-white px-3 py-3 text-sm font-poppins font-normal transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-n-200 focus-visible:outline-none focus-visible:shadow-focus-normal disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-n-40",
  {
    variants: {
      variant: {
        default: "border-n-100 text-n-500 focus-visible:border-b-200",
        error: "border-r-300 text-n-500 focus-visible:border-r-300 focus-visible:shadow-focus-normal",
        filled: "border-n-100 text-n-500 bg-n-40 focus-visible:border-b-200 focus-visible:bg-white",
        success: "border-g-300 text-n-500 focus-visible:border-g-300",
      },
      size: {
        default: "h-12",
        sm: "h-10 rounded-lg px-3 text-xs",
        lg: "h-14 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const labelVariants = cva(
  "block text-sm font-poppins font-medium mb-2",
  {
    variants: {
      variant: {
        default: "text-n-400",
        error: "text-r-400",
        disabled: "text-n-200",
        success: "text-g-400",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const helperTextVariants = cva(
  "text-xs font-poppins font-normal mt-1",
  {
    variants: {
      variant: {
        default: "text-n-200",
        error: "text-r-400",
        success: "text-g-400",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string
  helperText?: string
  error?: boolean
  success?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, type, label, helperText, error, success, disabled, ...props }, ref) => {
    // Determine the variant based on state
    const inputVariant = error ? "error" : success ? "success" : variant
    const labelVariant = error ? "error" : success ? "success" : disabled ? "disabled" : "default"
    const helperVariant = error ? "error" : success ? "success" : "default"

    return (
      <div className="w-full">
        {label && (
          <label className={cn(labelVariants({ variant: labelVariant }))}>
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(inputVariants({ variant: inputVariant, size, className }))}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        {helperText && (
          <div className={cn(helperTextVariants({ variant: helperVariant }))}>
            {error && (
              <span className="inline-flex items-center">
                <svg className="w-3 h-3 mr-1\" fill="currentColor\" viewBox="0 0 20 20">
                  <path fillRule="evenodd\" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z\" clipRule="evenodd" />
                </svg>
                {helperText}
              </span>
            )}
            {success && (
              <span className="inline-flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {helperText}
              </span>
            )}
            {!error && !success && helperText}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants, labelVariants, helperTextVariants }