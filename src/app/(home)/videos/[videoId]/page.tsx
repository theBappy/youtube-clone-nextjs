import { VideoView } from "@/modules/studio/ui/views/video-view";
import { HydrateClient, trpc } from "@/trpc/server";


interface PageProps {
    params: Promise<{
        videoId: string;
    }>;
}

const Page = async({params}:PageProps) => {
  const {videoId} = await params;
  void trpc.videos.getOne.prefetch({id: videoId})
  // todo: don't forget to change to prefetch infinite
  void trpc.comments.getMany.prefetch({videoId : videoId})


  return (
    <HydrateClient>
        <VideoView videoId={videoId} />
    </HydrateClient>
  )
}

export default Page