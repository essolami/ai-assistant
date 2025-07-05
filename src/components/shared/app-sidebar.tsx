"use client";

import * as React from "react";
import {
  // Blocks,
  // Calendar,
  // Command,
  // Home,
  // Inbox,
  MessageCircleQuestion,
  // Search,
  Settings2,
  Sparkles,
  // Trash2,
} from "lucide-react";

// import { NavFavorites } from "@/components/ui/nav-favorites";
// import { NavMain } from "@/components/ui/nav-main";
import { NavSecondary } from "@/components/ui/nav-secondary";
import { NavWorkspaces } from "@/components/ui/nav-workspaces";
// import { TeamSwitcher } from "@/components/ui/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
// import { DialogCloseButton } from "../dialog/searchDialog";
// import { DialogTitle } from "../ui/dialog";

// This is sample data.
const data = {
  navSecondary: [
    // {
    //   title: "Trash",
    //   url: "#",
    //   icon: Trash2,
    // },
    {
      title: "Help",
      url: "/help",
      icon: MessageCircleQuestion,
    },
    {
      title: "FAQ",
      url: "/faq",
      icon: Settings2,
    },
    {
      title: "Contact Us",
      url: "/contact",
      icon: Sparkles,
    },
  ],

  workspaces: [
    // {
    //   name: "New Discussion",
    //   emoji: "🏠",
    //   href: "/new-discussion",
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavWorkspaces workspaces={data.workspaces} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
