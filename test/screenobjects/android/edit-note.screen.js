const AddNoteScreen = require("./add-note.screen");

class editNoteScreen {
    get firstNote (){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get More (){
        return $('~More');
    }

    get DeleteBtn  (){
        return $('//*[@text="Delete"]');
    }

    get ClickNav (){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get TrashCan () {
        return $('//*[@text="Trash Can"]');
    }

    get TrashCanItem () {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    async skipTutorial (){
        await AddNoteScreen.skipBtn.click();

        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    }

    async addAndSaveNote (noteHeading, noteBody) {
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.Txt.click();
        await expect(AddNoteScreen.clickTxt).toBeDisplayed();

        //add note title
        await AddNoteScreen.editTitle.addValue(noteHeading);
        
        // add note body
        await AddNoteScreen.editNote.addValue(noteBody);

        //save the changes
        await AddNoteScreen.saveNote();

        //assertion
        await expect(AddNoteScreen.editBtn).toBeDisplayed();

        await expect(AddNoteScreen.viewNote).toHaveText(noteBody);
    }

}

module.exports = new editNoteScreen();