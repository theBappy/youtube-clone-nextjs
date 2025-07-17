import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SubscriptionButtonProps {
  onClick: ButtonProps["onClick"];
  disabled: boolean;
  isSubscribed: boolean;
  className?: string;
  size?: ButtonProps["size"];
}

export const SubscriptionButton = ({
  onClick,
  disabled,
  isSubscribed,
  className,
  size,
}: SubscriptionButtonProps) => {
    return (
        <Button
        size={size}
        variant={isSubscribed ? "secondary" : 'default'}
        className={cn("rounded-full", className)}
        onClick={onClick}
        disabled={disabled}
        >
            {isSubscribed ? "Unsubscribe" : "Subscribe"}
        </Button>
    )
};
