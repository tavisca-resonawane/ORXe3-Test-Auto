import WDIOReporter from '@wdio/reporter'
import { request } from 'https'

export default class CustomReporter extends WDIOReporter {
    constructor(options:any) {
        /*
         * make reporter to write to the output stream by default
         */
        options = Object.assign(options, { stdout: true })
        super(options)
    }

    onTestPass(test) {
        this.write(`Congratulations! Your test "${test.title}" passed 👏`)
    }

    public async onTestFail(test) {
        console.log('Test Failed')
    }

    public async onRunnerEnd(runner) {
        const suites = this.suites;
        const testName= runner.specs[0];
        const specName = testName.substring(testName.lastIndexOf('\\') + 1);
        const sessionId = runner.sessionId;
        const formattedSuites = [];
        let overallStatus = 'passed’;
        for (const suiteKey of Object.keys(suites)) {
            // gathering data and formatting into objects and adding to formattedSuites array
            // if any of the tests fail, overallStatus is set to false
        }
        if (overallStatus = 'failed') {
            await this.sendDetails(formattedSuites[0]);
        }
    }

    private async sendDetails(details: any) {
        const options = {
          body: details,
          json: true,
          method: 'POST',
          url: this.options.sourceAddress,
        };
    }
    
}