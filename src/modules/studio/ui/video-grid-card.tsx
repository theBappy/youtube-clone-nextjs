
import Link from "next/link";
import { VideoThumbnail, VideoThumbnailSkeleton } from "@/modules/ui/components/video-thumbnail";
import { VideoGetManyOutput } from "@/modules/types";
import { VideoInfo, VideoInfoSkeleton } from "./video-info";



interface VideoGridCardProps {
  data: VideoGetManyOutput["items"][number];
  onRemove?: () => void;
}

export const VideoGridCardSkeleton = () => {
  return <div className="flex flex-col gap-2 w-full">
    <VideoThumbnailSkeleton />
    <VideoInfoSkeleton />
  </div>;
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
