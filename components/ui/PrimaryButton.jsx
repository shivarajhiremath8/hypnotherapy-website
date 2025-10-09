import React from 'react';

const PrimaryButton = ({
    children,
    onClick,
    type = "button",
    disabled = false,
    size = "medium",
    variant = "primary",
    className = "",
    icon,
    iconPosition = "left",
    as = "button",
    ...props
}) => {

    const sizeClasses = {
        small: 'px-4 py-2 text-sm gap-1.5',
        medium: 'px-6 py-3 text-base gap-2',
        large: 'px-8 py-4 text-lg gap-2.5'
    }

    const variantClasses = {
        primary: 'bg-gradient-to-r from-[#3A6EA5] to-[#2E5780] hover:from-[#3A6EA5] hover:to-[#3A6EA5] text-white shadow-lg hover:shadow-xl',
        outline: 'bg-transparent border border-white text-white hover:bg-[#3A6EA5] hover:border-[#3A6EA5] hover:text-white shadow-none'
    }

    const baseClasses = `${variantClasses[variant]} font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${sizeClasses[size]} ${className}`

    const Component = as

    return (
        <Component
            type={as === 'button' ? type : undefined}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            className={baseClasses}
            {...props}
        >
            {icon && iconPosition === 'left' && (
                <span className="flex-shrink-0">{icon}</span>
            )}
            {children}
            {icon && iconPosition === 'right' && (
                <span className="flex-shrink-0">{icon}</span>
            )}
        </Component>
    )
}

export default PrimaryButton