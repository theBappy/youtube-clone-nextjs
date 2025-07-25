"use client";
import { ChevronRight } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trpc } from "@/trpc/client";
import { DEFAULT_LIMIT } from "@/constants";
import { UserAvatar } from "@/components/user-avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { ListIcon } from 'lucide-react'

export const LoadingSkeleton = () => {
  return (
  <>
    {[1,2,3,4].map((i) => (
      <SidebarMenuItem key={i}>
        <SidebarMenuButton disabled>
        <Skeleton className="size-6 rounded-full shrink-0" />
        <Skeleton className="h-4 w-full" />
        </SidebarMenuButton>
      </SidebarMenuItem>
    ))}
  </>
  )
}

export const SubscriptionsSection = () => {
  const pathname = usePathname();
  const { data, isLoading } = trpc.subscriptions.getMany.useInfiniteQuery(
    { limit: DEFAULT_LIMIT },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="flex items-center gap-1">
        <span>Subscriptions</span>
        <ChevronRight className="w-3 h-3 text-muted-foreground" />
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {isLoading && (
            <LoadingSkeleton />
          )}
          {!isLoading && data?.pages
            .flatMap((page) => page.items)
            .map((subscription) => (
              <SidebarMenuItem
                key={`${subscription.creatorId}-${subscription.viewerId}`}
              >
                <SidebarMenuButton
                  asChild
                  tooltip={subscription.user.name}
                  isActive={pathname === `/users/${subscription.user.id}`}
                >
                  <Link prefetch  
                    className="flex items-center gap-4"
                    href={`/users/${subscription.user.id}`}
                  >
                    <UserAvatar
                      size="xs"
                      imageUrl={subscription.user.imageUrl}
                      name={subscription.user.name}
                    />
                    <span className="text-sm">{subscription.user.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            {!isLoading && (
              <SidebarMenuItem>
                <SidebarMenuButton 
                asChild
                isActive={pathname === '/subscriptions'}
                >
                  <Link prefetch   href='/subscriptions' className="flex items-center gap-4">
                  <ListIcon className="size-4" />
                  <span className="text-sm">All Subscriptions</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
