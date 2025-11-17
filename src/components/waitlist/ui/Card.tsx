import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`rounded-xl border bg-card text-card-foreground shadow-sm p-5 md:p-8 ${className}`}>
    {children}
  </div>
);

export default Card;