import { SystemEnums } from "@/enums/system.enum";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const buttonVariants = cva(
  "py-2 px-4 text-xl transition-all duration-200 ease-in-out hover:scale-101 active:scale-99",
  {
    variants: {
      variant: {
        default: "bg-brand-primary hover:bg-brand-primary/70",
        secondary: "bg-brand-secondary hover:bg-brand-secondary/70",
        ghost: "bg-transparent hover:bg-gray-100/10",
        danger: "bg-red-500 hover:bg-red-600",
        outline:
          "border border-brand-primary text-brand-primary hover:bg-brand-primary/10",
      },
      size: {
        sm: "py-1 px-2 text-sm",
        md: "py-2 px-4 text-xl",
        lg: "py-3 px-6 text-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};
