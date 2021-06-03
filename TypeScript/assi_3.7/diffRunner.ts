const webdIO=require('webdriverio')
const { remote } = require('webdriverio')
 async () => {
    const browser=await webdIO({
        logLevel:'error',
        path:'/',
        capabilities: {
            browserName: 'firefox'
        }
    })
    await browser.url('https://webdriver.io')      
    const title = await browser.getTitle()
    console.log('Title was: ' + title)
    await browser.deleteSession()  
 }
