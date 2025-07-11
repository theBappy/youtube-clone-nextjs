
import {categoriesRouter} from '@/modules/categories/server/procedure'
import {  createTRPCRouter } from '../init';
import { StudioRouter } from '@/modules/studio/server/procedures';
import { videosRouter } from '@/modules/videos/server/procedures';


export const appRouter = createTRPCRouter({
  studio: StudioRouter,
  categories: categoriesRouter,
  videos: videosRouter,
});

export type AppRouter = typeof appRouter;