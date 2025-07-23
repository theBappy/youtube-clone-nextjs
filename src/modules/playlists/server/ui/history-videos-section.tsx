"use client";

import { DEFAULT_LIMIT } from "@/constants";
import { InfiniteScroll } from "@/modules/studio/components/infinite-scroll";
import {
  VideoGridCard,
  VideoGridCardSkeleton,
} from "@/modules/studio/ui/video-grid-card";
import {
  VideoRowCard,
  VideoRowCardSkeleton,
} from "@/modules/studio/ui/video-row-card";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const HistoryVideosSection = () => {
  return (
    <Suspense fallback={<HistoryVideoSectionSkeleton />}>
      <ErrorBoundary fallback={<p>Error</p>}>
        <HistoryVideosSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};

const HistoryVideoSectionSkeleton = () => {
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

const HistoryVideosSectionSuspense = () => {
  const [videos, query] = trpc.playlists.getHistory.useSuspenseInfiniteQuery(
    { limit: DEFAULT_LIMIT },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  return (
    <div>
      <div className="flex flex-col gap-4 gap-y-10 md:hidden">
        {videos.pages
          .flatMap((page) => page.items)
          .map((video) => (
            <VideoGridCard key={video.id} data={video} />
          ))}
      </div>
      <div className="hidden flex-col gap-4 md:flex">
        {videos.pages
          .flatMap((page) => page.items)
          .map((video) => (
            <VideoRowCard size="compact" key={video.id} data={video} />
          ))}
      </div>
      <InfiniteScroll
        hasNextPage={query.hasNextPage}
        isFetchingNextPage={query.isFetchingNextPage}
        fetchNextPage={query.fetchNextPage}
      />
    </div>
  );
};
