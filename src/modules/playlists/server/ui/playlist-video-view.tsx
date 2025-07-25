import { PlaylistHeaderSection } from "@/modules/home/ui/sections/playlist-header-section";
import { VideosSection } from "./videos-section";

interface PlaylistVideosViewProps {
    playlistId: string;
}

export const PlaylistVideosView = ({playlistId}:PlaylistVideosViewProps) => {
    return (
        <div className="max-w-screen-md mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
           <PlaylistHeaderSection playlistId={playlistId} />
           <VideosSection playlistId={playlistId} />
        </div>
    )
}