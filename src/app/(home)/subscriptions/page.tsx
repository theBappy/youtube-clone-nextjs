import { HydrateClient, trpc } from "@/trpc/server"
import { DEFAULT_LIMIT } from "@/constants"
import { SubscriptionsView } from "@/modules/subscriptions/views/subscriptions-view"

export const dynamic = 'force-dynamic'

const Page = async() => {
  void trpc.subscriptions.getMany.prefetchInfinite({
    limit: DEFAULT_LIMIT
  }) 

  return (
    <HydrateClient>
        <SubscriptionsView />
    </HydrateClient>
  )
}

export default Page