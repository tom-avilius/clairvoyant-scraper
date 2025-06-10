// to scrape the web
import { chromium } from "playwright";

const element = ".kY2IgmnCmOGjharHErah";

// start of scraping
export async function scrapeDuckDuckGoNews(newsTitle: string) {
  // launch chromium browser.
  // BUG: Headless mode does not work.
  // OPTIMIZE: Use headless mode.
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // search for the news
  await page.goto(`https://duckduckgo.com/?q=news:${newsTitle}`);

  try {
    // wait for the selector (the news element)
    await page.waitForSelector(element);

    // the data from the scraping and mapping.
    const data = await page.$$eval(element, (elements) =>
      elements.map((el) => el.textContent?.trim() || ""),
    );
  } catch (error) {
    // if an error occurs log it
    console.log(error);
  }

  // close the browser once scraping finishes.
  await browser.close();
}
