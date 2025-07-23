import { inferRouterOutputs } from "@trpc/server";
import { appRouter } from "@/trpc/routers/_app";

export type PlaylistGetManyOutput =
  inferRouterOutputs<appRouter>["playlists"]["getMany"];
