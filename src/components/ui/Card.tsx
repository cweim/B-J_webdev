import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  imageUrl?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  imageUrl,
  imageAlt = 'Card image',
  title,
  description,
  onClick,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg md:rounded-2xl border-2 border-border-cyan group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/20 ${className}`}
      onClick={onClick}
    >
      {imageUrl && (
        <div className="relative w-full h-64 md:h-80">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      )}

      {(title || description) && (
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          {title && <h3 className="text-white font-semibold text-lg md:text-xl">{title}</h3>}
          {description && <p className="text-text-gray text-sm mt-2">{description}</p>}
        </div>
      )}

      {children && !imageUrl && <div className="p-6">{children}</div>}
    </div>
  );
};
