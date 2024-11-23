'use client';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as icons from 'lucide-react';
import * as React from 'react';
import { Icon } from '../Icon';
import { cn } from '@/utils/cn';



const iconButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-accent hover:bg-accent/90text-text-dark',
        destructive:
          'bg-red-500 text-text-dark hover:bg-red-500/90',
        outline:
          'border border-input bg-accent hover:bg-accent/90 text-text-dark disable:',
        secondary:
          'bg-secondary text-text-dark hover:bg-secondary/80',
        ghost: 'hover:bg-none hover:text-text-dark',
        link: 'text-text-dark underline-offset-4 hover:underline',
        unstyled: 'text-primary hover:bg-none ',
      },
      size: {
        default: 'p-3',
        sm: ' rounded-md p-2',
        md: 'rounded-lg px-2 py-1 size-8',
        lg: ' rounded-md p-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
  icon?: keyof typeof icons;
  strokeWidth?: number;
  iconClassName?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant,
      size,
      icon,
      strokeWidth,
      iconClassName,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <Icon strokeWidth={strokeWidth} className={iconClassName} icon={icon} />
      </Comp>
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton, iconButtonVariants };
