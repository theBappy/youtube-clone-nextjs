
import Link from "next/link";
import { useMemo } from "react";
import { VideoThumbnail } from "@/modules/ui/components/video-thumbnail";
import { VideoGetManyOutput } from "@/modules/types";
import { VideoInfo } from "./video-info";


interface VideoGridCardProps {
  data: VideoGetManyOutput["items"][number];
  onRemove?: () => void;
}

export const VideoGridCardSkeleton = () => {
  return <div>Skeleton</div>;
};

export const VideoGridCard = ({ data, onRemove }: VideoGridCardProps) => {

  return (
    <div className="flex flex-col gap-2 w-full group">
      <Link 
      href={`/videos/${data.id}`}>
        <VideoThumbnail 
          imageUrl={data.thumbnailUrl}
          previewUrl={data.previewUrl}
          title={data.title}
          duration={data.duration}
        />
      </Link>
       <VideoInfo data={data} onRemove={onRemove} />
    </div>
  )
  
};
