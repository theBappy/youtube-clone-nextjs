"use client";
import { HistoryIcon,ThumbsUpIcon, ListVideoIcon,VideoIcon,ClockIcon,ChevronRight } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel
} from "@/components/ui/sidebar";
import Link from "next/link";
import {useAuth, useClerk} from '@clerk/nextjs'
import { usePathname } from "next/navigation";



const items = [
  {
    title: "History",
    url: "/playlists/history",
    icon: HistoryIcon,
    auth: true,
  },
  {
    title: "Liked Videos",
    url: "/playlists/liked",
    icon: ThumbsUpIcon,
    auth: true,
  },
  {
    title: "All Playlists",
    url: "/playlists",
    icon: ListVideoIcon,
    auth: true,
  },
  {
    title: "Your Videos",
    url: "/your-videos",
    icon: VideoIcon,
    auth: true,
  },
  {
    title: "Watch Later",
    url: "/playlists/watch-later",
    icon: ClockIcon,
    auth: true,
  },
];
export const PersonalSection = () => {
  const { isSignedIn } = useAuth()
  const clerk = useClerk()
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="flex items-center gap-1">
        <span>You</span>
        <ChevronRight className="w-3 h-3 text-muted-foreground" />
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                isActive={pathname === item.url} 
                onClick={(e) => {
                  if(!isSignedIn && item.auth){
                    e.preventDefault()
                    return clerk.openSignIn()
                  }
                }} 
              >
                <Link prefetch   className="flex items-center gap-4" href={item.url}>
                  <item.icon />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
