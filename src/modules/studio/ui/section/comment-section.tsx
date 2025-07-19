"use client";

import { Suspense } from "react";
import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import { CommentForm } from "@/modules/comments/server/ui/components/comment-form";
import { CommentItem } from "@/modules/comments/server/ui/components/comment-item";
import { DEFAULT_LIMIT } from "@/constants";
import { InfiniteScroll } from "../../components/infinite-scroll";
import { Loader2Icon } from "lucide-react";

interface CommentsSectionProps {
  videoId: string;
}

export const CommentSection = ({ videoId }: CommentsSectionProps) => {
  return (
    <Suspense fallback={<CommentSectionSkeleton />}>
      <ErrorBoundary fallback={<p>Error</p>}>
      <CommentSectionSuspense videoId={videoId} />
      </ErrorBoundary>
    </Suspense>
  )
}

const CommentSectionSkeleton = () => {
  return (
    <div className="mt-6 flex justify-center items-center">
      <Loader2Icon className="text-muted-foreground size-7 animated-spin" />
    </div>
  )
}

export const CommentSectionSuspense = ({ videoId }: CommentsSectionProps) => {
  const [comments, query] = trpc.comments.getMany.useSuspenseInfiniteQuery({ videoId, limit: DEFAULT_LIMIT }, {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  return <div className="mt-6">
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-bold">
       {comments.pages[0].totalCount} Comments
      </h1>
      <CommentForm videoId={videoId} />
    <div className="flex flex-col gap-4 mt-2">
    {comments.pages.flatMap((page) => page.items).map((comment) => (
      <CommentItem key={comment.id} comment={comment} />
    ))}
    <InfiniteScroll 
        isManual
        hasNextPage={query.hasNextPage}
        isFetchingNextPage={query.isFetchingNextPage}
        fetchNextPage={query.fetchNextPage}
    />
    </div>
    </div>
  </div>;
};
