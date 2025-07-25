import { DEFAULT_LIMIT } from "@/constants";
import { PlaylistVideosView } from "@/modules/playlists/server/ui/playlist-video-view";
import { HydrateClient, trpc } from "@/trpc/server";

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ playlistId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { playlistId } = await params;
  
  void trpc.playlists.getOne.prefetch({id: playlistId})
  void trpc.playlists.getVideos.prefetchInfinite({
    playlistId,
    limit: DEFAULT_LIMIT,
  });

  return (
    <HydrateClient>
      <PlaylistVideosView playlistId={playlistId} />
    </HydrateClient>
  );
};

export default Page;
