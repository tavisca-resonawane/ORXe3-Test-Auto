describe('Base features',()=>
{
    describe('feature 1 @base @Citi',()=>{
        it('Scenario_1 @smoke',()=>
        {
            console.log('Running smoke test 1')
        })

        it('Scenario_2 @regression',()=>
        {
            console.log('Running smoke test 2')
        })
    });

    describe('feature 2 @base @Citi',()=>{
        it('Scenario_1 @smoke',()=>
        {
            console.log('Running smoke test 1')
        })

        it('Scenario_2 @regression',()=>
        {
            console.log('Running smoke test 2')
        })
    });
    describe('feature 3 @base',()=>{
        it('Scenario_1 @smoke',()=>
        {
            console.log('Running smoke test 3')
        })

        it('Scenario_2 @regression',()=>
        {
            console.log('Running smoke test 3')
        })
    });
    describe('feature 4 @base',()=>{
        it('Scenario_1 @smoke',()=>
        {
            console.log('Running smoke test 4')
        })

        it('Scenario_2 @regression',()=>
        {
            console.log('Running smoke test 4')
        })
    });
});

describe('Client Citi Features',()=>{
    describe('Citi feature_1 @Citi', () => {
        it('Scenario_1 @smoke', () => {
            console.log('Running Citi smoke test 1')
        });
        it('Scenario_2 @regression', () => {
            console.log('Running Citi regression test 1')
        });
        describe('Citi feature_2 @Citi', () => {
            it('Scenario_1 @smoke', () => {
                console.log('Running Citi smoke test 2')
            });
            it('Scenario_2 @regression', () => {
                console.log('Running Citi regression test 2')
            });
        });
    });
});