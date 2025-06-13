import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "../../lib/utils"
import { DropdownMenu, type DropdownOption } from "./dropdown-menu"

const dropdownVariants = cva(
  "flex w-full items-center justify-between rounded-xl border bg-white px-3 py-3 text-sm font-poppins font-normal transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:shadow-focus-normal disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-n-40",
  {
    variants: {
      variant: {
        default: "border-n-100 text-n-500 hover:border-n-200 focus-visible:border-b-200",
        error: "border-r-300 text-n-500 focus-visible:border-r-300 focus-visible:shadow-focus-normal",
        filled: "border-n-100 text-n-500 bg-n-40 hover:bg-white focus-visible:border-b-200 focus-visible:bg-white",
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

export interface DropdownProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof dropdownVariants> {
  label?: string
  helperText?: string
  placeholder?: string
  options: DropdownOption[]
  value?: string
  onChange?: (value: string) => void
  error?: boolean
  success?: boolean
  disabled?: boolean
}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ 
    className, 
    variant, 
    size, 
    label, 
    helperText, 
    placeholder = "Select an option", 
    options, 
    value, 
    onChange, 
    error, 
    success, 
    disabled,
    ...props 
  }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [focusedIndex, setFocusedIndex] = React.useState(-1)
    const dropdownRef = React.useRef<HTMLDivElement>(null)
    const menuRef = React.useRef<HTMLDivElement>(null)

    // Determine the variant based on state
    const dropdownVariant = error ? "error" : success ? "success" : variant
    const labelVariant = error ? "error" : success ? "success" : disabled ? "disabled" : "default"
    const helperVariant = error ? "error" : success ? "success" : "default"

    // Find selected option
    const selectedOption = options.find(option => option.value === value)

    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false)
          setFocusedIndex(-1)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Handle keyboard navigation
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (disabled) return

      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault()
          if (!isOpen) {
            setIsOpen(true)
            setFocusedIndex(0)
          } else if (focusedIndex >= 0) {
            handleSelect(options[focusedIndex].value)
          }
          break
        case 'Escape':
          setIsOpen(false)
          setFocusedIndex(-1)
          dropdownRef.current?.focus()
          break
        case 'ArrowDown':
          event.preventDefault()
          if (!isOpen) {
            setIsOpen(true)
            setFocusedIndex(0)
          } else {
            setFocusedIndex(prev => 
              prev < options.length - 1 ? prev + 1 : prev
            )
          }
          break
        case 'ArrowUp':
          event.preventDefault()
          if (isOpen) {
            setFocusedIndex(prev => prev > 0 ? prev - 1 : prev)
          }
          break
        case 'Tab':
          setIsOpen(false)
          setFocusedIndex(-1)
          break
      }
    }

    const handleSelect = (optionValue: string) => {
      onChange?.(optionValue)
      setIsOpen(false)
      setFocusedIndex(-1)
      dropdownRef.current?.focus()
    }

    const handleToggle = () => {
      if (disabled) return
      setIsOpen(!isOpen)
      if (!isOpen) {
        setFocusedIndex(0)
      } else {
        setFocusedIndex(-1)
      }
    }

    return (
      <div className="w-full" ref={ref}>
        {label && (
          <label className={cn(labelVariants({ variant: labelVariant }))}>
            {label}
          </label>
        )}
        
        <div className="relative" ref={dropdownRef}>
          <div
            className={cn(dropdownVariants({ variant: dropdownVariant, size, className }))}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            tabIndex={disabled ? -1 : 0}
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-disabled={disabled}
            {...props}
          >
            <span className={selectedOption ? "text-n-500" : "text-n-200"}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            
            <div className="flex items-center">
              {isOpen ? (
                <ChevronUp className="w-4 h-4 text-n-300 transition-transform duration-200" />
              ) : (
                <ChevronDown className="w-4 h-4 text-n-300 transition-transform duration-200" />
              )}
            </div>
          </div>

          {isOpen && (
            <DropdownMenu
              ref={menuRef}
              size={size}
              options={options}
              selectedValue={value}
              focusedIndex={focusedIndex}
              onSelect={handleSelect}
              onClose={() => setIsOpen(false)}
              label={label}
            />
          )}
        </div>

        {helperText && (
          <div className={cn(helperTextVariants({ variant: helperVariant }))}>
            {error && (
              <span className="inline-flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
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

Dropdown.displayName = "Dropdown"

export { Dropdown, dropdownVariants }
export type { DropdownOption }