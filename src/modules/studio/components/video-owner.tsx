import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar";
import { useSubscriptions } from "@/modules/subscriptions/hooks/use-subscription";
import { SubscriptionButton } from "@/modules/subscriptions/subscription-button";
import { VideoGetOneOutput } from "@/modules/types";
import { UserInfo } from "@/modules/users/user-info";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

interface VideoOwnerProps {
  user: VideoGetOneOutput["user"];
  videoId: string;
}

export const VideoOwner = ({ user, videoId }: VideoOwnerProps) => {
  const { userId: clerkUserId, isLoaded } = useAuth();
  const {isPending, onClick} = useSubscriptions({
    userId: user.id,
    isSubscribed: user.viewerSubscribed,
    fromVideoId: videoId,
  })

  return (
    <div className="flex items-center sm:items-start justify-between sm:justify-start gap-3">
      <Link href={`/users/${user.id}`}>
        <div className="flex items-center gap-3 min-w-0">
          <UserAvatar size="lg" imageUrl={user.imageUrl} name={user.name} />
          <div className="flex flex-col gap-1 min-w-0">
          <UserInfo size='lg' name={user.name} />
          <span className="text-sm text-muted-foreground line-clamp-1">
            {/* todo: properly fill subscriber counts */}
            {user.subscriberCount} subscribers
          </span>
          </div>
        </div>
      </Link>
      {clerkUserId === user.clerkId ? (
        <Button className="rounded-full" asChild variant="secondary">
          <Link href={`/studio/videos/${videoId}`}>Edit Video</Link>
        </Button>
      ) : (
        <SubscriptionButton
          onClick={onClick}
          disabled={isPending || isLoaded}
          isSubscribed={user.viewerSubscribed}
          className="flex-none"
        />
      )}
    </div>
  );
};
