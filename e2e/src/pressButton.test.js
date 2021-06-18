const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
    await page.goto(URL, { waitUntil: 'domcontentloaded' });
});

describe('Test Page Actions', () => {
    test(
        'Press the "Press to Request" button (with internet)',
        async () => {
            await page.click('button');
            await new Promise((r) => setTimeout(r, 2000));
            await page.waitForSelector('p');
            const htmlWithContent = await page.$eval('p', (el) => el.innerHTML);
            expect(htmlWithContent).toBe('world');
        },
        timeout
    );
});
