import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { APP_URL } from "@/constants";
import { PlaylistAddModal } from "@/modules/playlists/playlist-add-modal";
import {
  FlagIcon,
  ListPlusIcon,
  MoreVertical,
  ShareIcon,
  Trash2Icon,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";


interface VideoMenuProps {
  videoId: string;
  variant?: "ghost" | "secondary";
  onRemove?: () => void;
}

const VideoMenu = ({ videoId, variant = 'ghost', onRemove }: VideoMenuProps) => {
  const [openPlaylistAddModal, setOpenPlaylistAddModal] = useState(false)

  const onShare = () => {
    const fullUrl = `${APP_URL}/videos/${videoId}`;
    navigator.clipboard.writeText(fullUrl)
    toast.success('Link copied to the clipboard')
  };
  return (
  <>
  <PlaylistAddModal
    videoId={videoId} 
    open={openPlaylistAddModal}
    onOpenChange={setOpenPlaylistAddModal}
  />
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size="icon" className="rounded-full">
          <MoreVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
        <DropdownMenuItem onClick={onShare}>
          <ShareIcon className="mr-2 size-4" /> Share
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setOpenPlaylistAddModal(true)}>
          <ListPlusIcon className="mr-2 size-4" /> Add to playlist
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>
          <FlagIcon className="mr-2 size-4" /> Report
        </DropdownMenuItem>
        {onRemove && (
          <DropdownMenuItem onClick={onRemove}>
            <Trash2Icon className="mr-2 size-4" /> Remove
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  </>
  );
};

export default VideoMenu;
