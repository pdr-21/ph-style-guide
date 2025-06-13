import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const dropdownMenuVariants = cva(
  "absolute z-50 w-full mt-1 bg-white border border-n-100 rounded-lg shadow-lg max-h-60 overflow-auto",
  {
    variants: {
      size: {
        default: "text-sm",
        sm: "text-xs",
        lg: "text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const dropdownItemVariants = cva(
  "w-full px-3 py-2 text-left font-poppins font-normal transition-colors cursor-pointer hover:bg-n-40 focus:bg-n-40 focus:outline-none",
  {
    variants: {
      size: {
        default: "py-2 px-3",
        sm: "py-1.5 px-3",
        lg: "py-3 px-4",
      },
      selected: {
        true: "bg-b-40 text-b-300 hover:bg-b-50",
        false: "text-n-500",
      },
    },
    defaultVariants: {
      size: "default",
      selected: false,
    },
  }
)

export interface DropdownOption {
  label: string
  value: string
}

export interface DropdownMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dropdownMenuVariants> {
  options: DropdownOption[]
  selectedValue?: string
  focusedIndex?: number
  onSelect: (value: string) => void
  onClose: () => void
  label?: string
}

const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ 
    className, 
    size, 
    options, 
    selectedValue, 
    focusedIndex = -1, 
    onSelect, 
    onClose, 
    label,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(dropdownMenuVariants({ size, className }))}
        role="listbox"
        aria-label={label || "Options"}
        {...props}
      >
        {options.map((option, index) => (
          <div
            key={option.value}
            className={cn(
              dropdownItemVariants({ 
                size, 
                selected: option.value === selectedValue 
              }),
              focusedIndex === index && "bg-n-50"
            )}
            onClick={() => onSelect(option.value)}
            onMouseEnter={() => {
              // This could be enhanced to update focused index if needed
            }}
            role="option"
            aria-selected={option.value === selectedValue}
            tabIndex={-1}
          >
            {option.label}
          </div>
        ))}
      </div>
    )
  }
)

DropdownMenu.displayName = "DropdownMenu"

export { DropdownMenu, dropdownMenuVariants, dropdownItemVariants }