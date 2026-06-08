'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { useState } from 'react';
import { LuEye, LuEyeClosed } from 'react-icons/lu';

const inputVariants = cva(
  'w-full px-4 py-2 placeholder:text-gray-500 placeholder:text-sm outline-0! [&:-webkit-autofill]:shadow-[0_0_0_1000px_#1a1a1a_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#fff] transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-neutral-800/30',
        outlined:
          'bg-transparent border border-neutral-600 rounded-md focus:border-neutral-400',
        filled: 'bg-neutral-700 rounded-md focus:bg-neutral-600',
        ghost:
          'bg-transparent border-b border-neutral-600 rounded-none focus:border-neutral-300 px-0',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

export const Input = ({ variant, className, ...props }: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const isPassword = props.type === 'password';

  return (
    <div className='relative w-full'>
      <input
        {...props}
        type={isPassword ? (isVisible ? 'text' : 'password') : props.type}
        className={clsx(inputVariants({ variant }), className)}
      />
      {isPassword && (
        <button
          type='button'
          onClick={() => setIsVisible(!isVisible)}
          className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-300 transition-colors duration-200'
        >
          <LuEye
            className={`absolute transition-all duration-300 ${
              isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`}
          />
          <LuEyeClosed
            className={`transition-all duration-300 ${
              isVisible ? 'opacity-0 scale-y-0' : 'opacity-100 scale-y-100'
            }`}
          />
        </button>
      )}
    </div>
  );
};
