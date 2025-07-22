import { Button } from "@/components/ui/button";

import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";

export default function NavbarEllipsis() {
  return (
    <Button size="smIcon" variant="secondary">
      {/* dropdown here */}
      {/* login button and shortcuts */}
      <EllipsisVerticalIcon />
    </Button>
  );
}
