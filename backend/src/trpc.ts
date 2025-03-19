import { initTRPC } from '@trpc/server';
import _ from 'lodash';
import { z } from 'zod';

const newsList = _.times(100, (i) => ({
  id: String(i),
  title: `news title ${i}`,
  text: `generated random news ${i}`,
  description: _.times(20, (j) => `<p>Text paragraph of news ${j}</p>`).join(''),
  tail: ",",
}));

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  getNews: trpc.procedure.query(() => {
    return { newsList: newsList.map((item) => _.pick(item, ['id', 'title', 'description', 'text'])) };
  }),
  getDetailNews: trpc.procedure.input(
    z.object({
      id: z.string(),
    })
  ).query(({input}) => {
    return { news: newsList.find(item=>item.id === input.id) || null }
  }),
});

export type TrpcRouter = typeof trpcRouter;
