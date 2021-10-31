const puppeteer = require('puppeteer');


async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)
    const [el] = await page.$x('/html/body/div[1]/div[5]/div[2]/div[2]/div/div[1]/div[1]/div[3]/div[3]/ul/li/div[2]/div[2]/div[1]')
    const txt = await el.getProperties('textContent');
    const srctxt = await txt.jsonValue();

    console.log({srctxt});
    browser.close
}



scrapeProduct('https://www.chegg.com/homework-help/questions-and-answers/oooooooooooooo-source-code-chegg-discord-bot-say-code-q84050495')