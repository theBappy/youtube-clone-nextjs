import { HydrateClient, trpc } from "@/trpc/server"
import { PlaylistsView } from "@/modules/playlists/server/playlist-view"
import { DEFAULT_LIMIT } from "@/constants"


const Page = async() => {
  void trpc.playlists.getMany.prefetchInfinite({ limit: DEFAULT_LIMIT})

  return (
    <HydrateClient>
        <PlaylistsView />
    </HydrateClient>
  )
}

export default Page