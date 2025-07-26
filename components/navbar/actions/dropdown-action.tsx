import { Button } from "@/components/ui/button";
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";

export const DropdownAction = () => {
  return (
    <Button size="icon" variant="secondary">
      {/* dropdown here */}
      {/* login button and shortcuts */}
      <EllipsisVerticalIcon />
    </Button>
  );
};
