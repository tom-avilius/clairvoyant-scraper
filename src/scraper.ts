// to scrape the web
import { chromium } from "playwright";

// the selector for news
// WARN: This tag does change over time.
const element = ".kY2IgmnCmOGjharHErah";

// start of scraping
export async function scrapeDuckDuckGoNews(newsTitle: string): Promise<any> {
  // launch chromium browser.
  // BUG: Headless mode does not work.
  // OPTIMIZE: Use headless mode.
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // search for the news
  await page.goto(`https://duckduckgo.com/?q=${newsTitle}`);

  try {
    // wait for the selector (the news element)
    await page.waitForSelector(element);

    // the data from the scraping and mapping.
    // WARN: No data cleaning is performed.
    const data = await page.$$eval(element, (elements) =>
      elements.map((el) => el.textContent?.trim() || ""),
    );

    // close the browser before returning from the process.
    await browser.close();
    return data;
  } catch (error) {
    // if an error occurs log it
    console.log(error);
  }

  // close the browser once scraping finishes.
  await browser.close();
}
