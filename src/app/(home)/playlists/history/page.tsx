import { DEFAULT_LIMIT } from '@/constants'
import { HistoryView } from '@/modules/playlists/server/ui/history-view'
import { HydrateClient, trpc } from '@/trpc/server'

export const dynamic = 'force-dynamic'


const Page = () => {
  void trpc.playlists.getHistory.prefetchInfinite({limit: DEFAULT_LIMIT})


  return (
    <HydrateClient>
        <HistoryView />
    </HydrateClient>
  )
}

export default Page