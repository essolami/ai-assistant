import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ModeToggle } from "./mode-toggle";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import { SidebarTrigger } from "../ui/sidebar";

export function MainHeader() {
  return (
    <Menubar className="flex justify-between p-1 h-auto">
      <div className="flex text-xs">
        <SidebarTrigger />
        <MenubarMenu>
          <MenubarTrigger className="text-xs cursor-pointer">
            File
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-xs cursor-pointer">
            Edit
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-xs cursor-pointer">
            View
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-xs cursor-pointer">
            Profiles
          </MenubarTrigger>
        </MenubarMenu>
      </div>
    </Menubar>
  );
}
