import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";

const DemoButton: typeof Button = ({ className, ...props }) => {
  return (
    <Button
      variant="primary"
      {...props}
      asChild
      className={cn("gap-2.5", className)}
    >
      <Link href="https://forms.gle/ax3Ds57nmMHQY97d7" target="_blank">
        Book a Demo
        <ArrowUpRight className="size-6" />
      </Link>
    </Button>
  );
};

export default DemoButton;
