import React from 'react';

const Card = ({
  children,
  className = '',
  variant = 'default',
  padding = true,
  ...props
}) => {
  const baseStyles = 'rounded-lg shadow-md bg-white';
  
  const variants = {
    default: 'border border-gray-200',
    elevated: 'shadow-lg',
    outlined: 'border-2 border-gray-300',
  };

  const paddingStyles = padding ? 'p-4' : '';

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${paddingStyles}
    ${className}
  `.trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
