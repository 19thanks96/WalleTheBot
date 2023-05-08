import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto('https://developer.chrome.com/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  
  const textSelectorv2 = await page.waitForSelector(
    'text/How to report a Chrome'
    );
  const fullTitlev2 = await textSelectorv2?.evaluate(el => el.textContent);
  console.log('god bless you "%s".', fullTitlev2);

  const searchResultSelectorv3 = '.search-box__input';
  const element = await page.waitForSelector(searchResultSelectorv3);
  const fullTitlev3 = await element?.evaluate(el => el.type);
  console.log('god bless you now  "%s".', fullTitlev3);


  // Type into search box
  await page.type('.search-box__input', 'automate beyond recorder');

  // Wait and click on first result
  const searchResultSelector = '.search-box__link';
  
  await page.waitForSelector(searchResultSelector);
  
  await page.click(searchResultSelector);
  
  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    'text/Customize and automate'
    );

    const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
})();

