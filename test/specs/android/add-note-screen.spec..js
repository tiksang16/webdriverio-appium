const addNoteScreen = require("../../screenobjects/android/add-note.screen");

describe('Add Notes', () => {
    it('Skip Tutorial', async () => {

        await addNoteScreen.skipBtn.click();

        await expect(addNoteScreen.addNoteTxt).toBeDisplayed();
    });

    it('add a note, save changes & verify note', async () => {
        await addNoteScreen.addNoteTxt.click();
        await addNoteScreen.Txt.click();
        await expect(addNoteScreen.clickTxt).toBeDisplayed();

        //add note title
        await addNoteScreen.editTitle.addValue("Few Anime List");
        
        // add note body
        await addNoteScreen.editNote.addValue("Naruto\nOnePiece\nAOT");

        //save the changes
        await addNoteScreen.saveNote();

        //assertion
        await expect(addNoteScreen.editBtn).toBeDisplayed();

        await expect(addNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");

    });

});