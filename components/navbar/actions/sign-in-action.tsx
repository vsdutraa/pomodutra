import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserIcon } from "@heroicons/react/16/solid";
import { cn } from "@/lib/utils";

interface SignInActionProps {
  variant?: "desktop" | "mobile";
}

export const SignInButton = ({ variant = "desktop" }: SignInActionProps) => {
  const isMobile = variant === "mobile";

  return (
    <div className={cn(isMobile ? "md:hidden" : "hidden md:flex")}>
      <Button asChild size={isMobile ? "icon" : "sm"} variant="secondary">
        <Link href="sign-up">
          <UserIcon />
          {!isMobile && <span>Sign In</span>}
        </Link>
      </Button>
    </div>
  );
};

export const SignInAction = () => {
  return (
    <>
      <SignInButton variant="desktop" />
      <SignInButton variant="mobile" />
    </>
  );
};
