import { PlaylistGetManyOutput } from "../types";
import Link from "next/link";
import { PlaylistThumbnail, PlaylistThumbnailSkeleton } from "./playlist-thumbnail";
import { PlayListInfo, PlaylistInfoSkeleton } from "./playlist-info";

interface PlaylistGridCardProps {
  data: PlaylistGetManyOutput["items"][number];
}
const THUMBNAIL_FALLBACK = "/placeholder.svg"

export const PlaylistGridCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <PlaylistThumbnailSkeleton />
      <PlaylistInfoSkeleton />
    </div>
  )
}

export const PlaylistGridCard = ({ data }: PlaylistGridCardProps) => {
  return (
    <Link prefetch   href={`/playlists/${data.id}`}>
      <div className="flex flex-col gap-2 w-full group">
        <PlaylistThumbnail 
        imageUrl={data.thumbnailUrl || THUMBNAIL_FALLBACK}
        title={data.name}
        videoCount={data.videoCount}
        />
        <PlayListInfo 
        data={data}
        />
      </div>
    </Link>
  );
};
