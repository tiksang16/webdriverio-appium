const editNoteScreen = require("../../screenobjects/android/edit-note.screen");

describe('Delete note', () => {
    before(async ()=>{
        await editNoteScreen.skipTutorial();
        await editNoteScreen.addAndSaveNote("TV Series", "Friends\nBreakingBad\nPeakyBlinders");
        await driver.back();
    });

    beforeEach(() =>{
        console.log('BEFORE EACH HOOK!!')
    });

    after(() =>{
        console.log('AFTER HOOK!!')
    });

    afterEach(() =>{
        console.log('AFTER EACH HOOK!!')
    });
    it('Delete a note', async () => {
        const note = await editNoteScreen.firstNote.getText();
    
        //click on the note
        await editNoteScreen.firstNote.click();
        await editNoteScreen.More.click();
    
        //click on delete button
        await editNoteScreen.DeleteBtn.click();
    
        //accept alert
        await driver.acceptAlert();
    
        //click on nav icon
        await editNoteScreen.ClickNav.click();
    
        // click on trash can item
        await editNoteScreen.TrashCan.click();
    
        //assertion
        const trashCanItem = await editNoteScreen.firstNote.getText();
        await expect(trashCanItem).toEqual(note);
    
    });
})