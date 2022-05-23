describe('Android Native Feature Tests', () => {
   it('Access an Activity directly', async () => {
       //access activity
       await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

       //pause
        await driver.pause(3000);

       //assertion
       await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
   })

   it('Working with Dialog Boxes', async () => {
    //access activity
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

    //click on first dialog
    await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

    //accept Alert
    // await driver.acceptAlert();

    //dismiss Alert
    // await driver.dismissAlert();

    //get alert text
    console.log('ALERT TEXT -->', await driver.getAlertText());

    //click on OK button
    await $('//*[@resource-id="android:id/button1"]').click();


    //assertion - alert box is no longer visible
    await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();

   })

    it('Access an Activeity directly', async () => {
        
    });

    it('Working with Dialog Boxes', async () => {

    });

    it('Vertical scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        //scroll to the end (not stable if element gets moved)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)')

        //scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfacess")').click();
        //assertion
        await expect($('~Secure Dialog')).toExist();
    })

    it('Horizontal scrolling', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");

        //Horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        //Scroll backward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

        await driver.pause(3000);
    
    })

    it.only('Change the date', async () => {

        //Access the Data Widget
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1");
        //Get the current date
        let date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        let currentdate = await date.getText();
        
        //Click on "Change the date"
        await $('~change the date').click();

        //Scoll
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        //Pick the 10th date
        await $('//*[@text="10"]').click();

        //Click Ok
        await $('//*[@resource-id="android:id/button1"]').click();

        //Assertion
        await expect(await date.getText()).not.toEqual(currentdate);
    })
});