const puppeteer = require('puppeteer');
const { ImgurClient } = require('imgur');
const fs = require('fs');
const buildNumber = process.argv[2];
const client = new ImgurClient({
    clientId: "6a66870b917c1aa"
});
async function captureScreenshotAndUpload() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({
        width: 1920,
        height: 1080,
    });
    await new Promise(resolve => setTimeout(resolve, 15000));
    await page.goto(`https://deep-sunbird-heroic.ngrok-free.app/login`);
    await page.screenshot({
        path: 'screenshot.png'
    });
    const response = await client.upload({
        image: fs.createReadStream('screenshot.png'),
        type: 'stream',
    });
    console.log(response.data.link);
    await browser.close();
    return response.data.link;
}
captureScreenshotAndUpload();