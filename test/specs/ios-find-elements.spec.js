describe('iOS', () => {
    it('find element by accessibility id', async() => {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });

    it('find by tag name', async ()=> {

        //single element
        console.log(await $('XCUIElementTypeStaticText').getText());

        //multiple elements
        const textEls = await $$('XCUIElementTypeStaticText');

        for (const element of textEls) {
            console.log(await element.getText());
        }
    })

    it('find element by accessibility id', async() => {

        //xpath - (//tagname[@attribute=value])
        // await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        // await $('//XCUIElementTypeStaticText[@label="Simple"]').click();

        await $('//*[@name="Alert Views"]').click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });

    it('search input field', async ()=> {
        await $('~Search').click();
        await $('~Default').click();
        await $('//XCUIElementTypeSearchField').addValue("I love this course!");

        await expect($('//XCUIElementTypeSearchField')).toHaveAttr("value");

        await $('~Clear text').click();
        await expect($('//XCUIElementTypeSearchField').not.toHaveAttr("value"));
    })

    it.only('Working with Scrollable elements', async ()=> {
        //easiest
        // await driver.execute('mobile: scroll', {direction: "down"});
        // await driver.execute('mobile: scroll', {direction: "up"});

        //complex
        await $('~Picker View').click();


        const redPicker = await $('~Red color component value');
        const bluePicker = await $('~Blue color component value');
        const greenPicker = await $('~Green color component value');

        //set purple color (125, 0, 125)
        await redPicker.addValue('125');
        await greenPicker.addValue('0');
        await bluePicker.addValue('125');

        // await driver.execute('mobile: scroll', { element:redPicker.elementId, direction: "down"});
        // await driver.execute('mobile: scroll', { element:bluePicker.elementId, direction: "down"});

        await driver.pause(2000);
    })
});