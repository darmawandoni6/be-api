import animeScrapingModel from "../src/model/animeScraping";

const syncDb = async () => {
  try {
    await animeScrapingModel.sync();

    console.log();
    console.log(`success sync database`);
    console.log();
  } catch (error) {
    const e = error as Error;
    console.log(error);
    console.log(`------------------- ${e.message} -------------------`);
    console.log();
  }
};

syncDb();
