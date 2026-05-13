// components/ui/button.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive"
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm"
}

const sizeClasses: Record<string, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3 text-sm",
  lg: "h-11 px-8",
  icon: "h-10 w-10 p-0",
  "icon-sm": "h-8 w-8 p-0",
}

const variantClasses: Record<string, string> = {
  default: "bg-primary text-white hover:bg-primary/90",
  outline: "border border-input bg-transparent hover:bg-accent",
  ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
  destructive: "bg-red-500 text-white hover:bg-red-600",
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
