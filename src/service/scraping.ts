import createHttpError from "http-errors";
import type { AnimeScraping } from "../type";
import moment from "moment";
import { prisma } from "../utils/prismaClient";
import { Prisma } from "@prisma/client";

const scrapingService = {
  create: async (payload: Prisma.ScrapingCreateInput[]): Promise<void> => {
    try {
      // await animeScrapingModel.bulkCreate(payload);
      await prisma.scraping.createMany({
        data: payload,
      });
    } catch (error) {
      const e = error as Error;
      return Promise.reject(createHttpError.BadRequest(e.message));
    }
  },
  findPage: async (type: string[], query = ""): Promise<AnimeScraping[]> => {
    try {
      const res = await prisma.scraping.findMany({
        where: {
          date: new Date(),
          query,
          type: {
            in: type,
          },
        },
        orderBy: [
          {
            id: "desc",
          },
        ],
      });

      return res;
    } catch (error) {
      const e = error as Error;
      return Promise.reject(createHttpError.BadRequest(e.message));
    }
  },
};
export default scrapingService;
