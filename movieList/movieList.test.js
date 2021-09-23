const { Builder, Capabilities, By } = require("selenium-webdriver")

require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();


beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

const movie = "Dogs"

    test('should add a movie', async () => {
        let searchBar = await driver.findElement(By.name('input'))
        await searchBar.sendKeys(`${movie}\n`)
        await driver.sleep(100)
    });

    test('verify title is correct', async () => {
        await driver.sleep(500)
        let movieTitle = await driver.findElement(By.xpath('//ul/li/span')).getText();
        expect(movieTitle).toEqual(movie);
    })

    test('cross off a movie', async () => {
        await driver.sleep(500)
        let title = await driver.findElement(By.xpath('//ul/li/span'))
        await title.click();
    })

    test('remove a movie', async () => {
        await driver.sleep(500)
        let button = await driver.findElement(By.id('Dogs'))
        await button.click();
    })





