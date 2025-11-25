import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 hover:scale-105';

  const variants = {
    primary: 'bg-accent-cyan text-primary-dark hover:shadow-lg hover:shadow-accent-cyan/50',
    secondary: 'bg-accent-blue text-white hover:shadow-lg hover:shadow-accent-blue/50',
    outline: 'border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};
