"use client";

import { DEFAULT_LIMIT } from "@/constants";
import { InfiniteScroll } from "@/modules/studio/components/infinite-scroll";
import { VideoGridCardSkeleton } from "@/modules/studio/ui/video-grid-card";
import { VideoRowCardSkeleton } from "@/modules/studio/ui/video-row-card";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { PlaylistGridCard } from "./playlist-grid-card";

export const PlaylistVideosSection = () => {
  return (
    <Suspense fallback={<PlaylistVideoSectionSkeleton />}>
      <ErrorBoundary fallback={<p>Error</p>}>
        <PlaylistVideosSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};

const PlaylistVideoSectionSkeleton = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 gap-y-10 md:hidden">
        {Array.from({ length: 18 }).map((_, index) => (
          <VideoGridCardSkeleton key={index} />
        ))}
      </div>
      <div className="hidden flex-col gap-4 md:flex">
        {Array.from({ length: 18 }).map((_, index) => (
          <VideoRowCardSkeleton size="compact" key={index} />
        ))}
      </div>
    </div>
  );
};

const PlaylistVideosSectionSuspense = () => {
  const [playlists, query] = trpc.playlists.getMany.useSuspenseInfiniteQuery(
    { limit: DEFAULT_LIMIT },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  return (
    <>
      <div className="flex flex-col gap-4 gap-y-10">
        {
          playlists.pages
            .flatMap((page) => page.items)
            .map((playlist) => (
              <PlaylistGridCard key={playlist.id} data={playlist} />
            ))
        }
      </div>
      <InfiniteScroll
        hasNextPage={query.hasNextPage}
        isFetchingNextPage={query.isFetchingNextPage}
        fetchNextPage={query.fetchNextPage}
      />
    </>
  );
};
