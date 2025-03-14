import { initTRPC } from "@trpc/server";

const newsList = [
  { id: 1, text: "news1" },
  { id: 2, text: "news2" },
  { id: 3, text: "news3" },
  { id: 4, text: "news4" },
  { id: 5, text: "news5" },
  { id: 6, text: "news6" },
];

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  getNews: trpc.procedure.query(() => {
    return { newsList };
  }),
});

export type TrpcRouter = typeof trpcRouter;
