import { cn } from '@/lib/utils';

export const Badge = ({ className, variant = 'default', ...props }: any) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium",
        // Green badge (top hero)
        variant === 'success' && "bg-green-50 text-green-700",
        // Maroon badge (5,000+ users)
        variant === 'maroon' && "bg-white/20 text-white backdrop-blur-sm",
        // Default (98% Accuracy)
        variant === 'default' && "bg-green-50 text-green-700 border border-green-200",
        className
      )}
      {...props}
    />
  );
};