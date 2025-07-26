import { Button } from "@/components/ui/button";

interface ToggleButtonProps {
  isRunning: boolean;
  onToggle: () => void;
  // disabled?: boolean;
}

export const ToggleButton = ({
  isRunning,
  onToggle,
  // disabled,
}: ToggleButtonProps) => {
  return (
    <Button
      className="mx-10 flex items-center justify-center py-6 font-bold"
      onClick={onToggle}
      // disabled={disabled}
    >
      {!isRunning ? "START" : "PAUSE"}
    </Button>
  );
};
