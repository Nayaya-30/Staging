interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface IconCardProps {
  icon: LucideIcon | IconType;
  title: string;
  description: string;
  isBenefit?: boolean;
}

interface FAQItemProps {
  question: string;
  answer: string;
}

interface CountdownProps {
  targetDate: Date;
}

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface NavItemProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}
