"use client";

import { usePathname, useRouter } from "next/navigation";
import { Row } from "../row";
import { SidebarOption } from "./constants/options";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  option: SidebarOption;
}

export default function SidebarItem({ option }: SidebarItemProps) {
  const router = useRouter();
  const activeOption = usePathname();
  return (
    <Row
      onClick={() => router.push(option.route)}
      className={cn(
        "gap-3 [&_svg]:size-5 px-6 py-4 font-bold tracking-widest",
        activeOption === option.route && "bg-brand-primary text-black",
      )}
    >
      {option.icon}
      <span>{option.label}</span>
    </Row>
  );
}
