import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
    "text-foreground border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-md border bg-background shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "px-4 py-4 text-base",
                sm: "px-3 py-2 text-sm rounded-md",
                lg: "px-5 py-5 text-lg rounded-lg",
                ghost: "bg-transparent border-none shadow-none px-0",
            },
            state: {
                normal: "",
                error: "border-destructive focus-visible:ring-destructive/50",
                success: "border-green-500 focus-visible:ring-green-500/50",
            },
        },
        defaultVariants: {
            variant: "default",
            state: "normal",
        },
    }
);

export interface TextareaProps
    extends React.ComponentProps<"textarea">,
        VariantProps<typeof textareaVariants> {}

function Textarea({
    className,
    disabled,
    variant,
    state,
    ...props
}: TextareaProps) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                textareaVariants({ variant, state }),
                { "opacity-50 pointer-events-none": disabled },
                className
            )}
            disabled={disabled}
            {...props}
        />
    );
}

export { Textarea };
