const puppeteer = require('puppeteer');
const { ImgurClient } = require('imgur');
const fs = require('fs');
const buildNumber = process.argv[2];
const jobName = process.argv[3];
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
    await page.goto(`https://deep-sunbird-heroic.ngrok-free.app/login`);
    await new Promise(resolve => setTimeout(resolve, 15000));
    // clicar no botão do ngrok
    try {
        await page.click('#root > div > main > div > div > section.mb-4.border.border-gray-300.bg-white.drop-shadow-md > div > footer > button');
    } catch (error) {
        console.log(error)
    }
    await new Promise(resolve => setTimeout(resolve, 5000));
    // tenta fazer login no jenkins
    try {
        await page.type('#j_username', 'admin')
        await page.type('#j_password', 'admin')
        await page.click('#main-panel > div > form > button')
    } catch (error) {
        console.log(error)
    }

    await new Promise(resolve => setTimeout(resolve, 5000));
    await page.goto(`https://deep-sunbird-heroic.ngrok-free.app/job/${jobName}/${buildNumber}/allure/`);
    await new Promise(resolve => setTimeout(resolve, 5000));
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