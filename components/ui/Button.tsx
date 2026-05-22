import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "spark" | "outline" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "spark",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  // Base classes for premium font styling and transition effects
  const baseClasses =
    "inline-flex items-center justify-center font-medium font-inter transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-qterra-black focus:ring-spark disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  // Variant styles mapping to the QTerra brand tokens
  const variants = {
    spark: "bg-spark text-qterra-black hover:bg-[#bce03e] hover:shadow-[0_0_20px_rgba(168,211,46,0.3)]",
    outline: "bg-transparent border border-white/20 hover:border-white/50 text-white hover:bg-white/5",
    secondary: "bg-forest text-white hover:bg-forest/80 border border-forest/10",
    ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
  };

  // Size sizing definitions
  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-md",
    md: "px-4.5 py-2.5 text-sm rounded-md",
    lg: "px-6 py-3.5 text-base rounded-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
