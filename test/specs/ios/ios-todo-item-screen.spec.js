// const ItemScreen = require('../../screenobjects/ios/item.screen');
// const ListScreen = require('../../screenobjects/ios/list.screen');

import ListScreen from '../../screenobjects/ios/list.screen';
import ItemScreen from '../../screenobjects/ios/item.screen';

describe('Todo List', () => {
    before(async () => {
        //Create TODO List
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue("Things to do today");
        await ListScreen.createBtn.click();
        await expect(await ListScreen.listNameField("Things to do today")).toBeExisting();
        await ListScreen.listNameField("Things to do today").click();
    });


    it('Create a todo list', async() => {
         // Create Todo Item
        await ItemScreen.createItem.click();
        await ItemScreen.title.addValue("Buy groceries");
        await ItemScreen.dueDates.click();
        await ItemScreen.datePicker.click();
        await ItemScreen.getByAccessibility("~Saturday April 30").click();
        await ItemScreen.secondWindow.click();
        await ItemScreen.createBtn.click();

        //assertion
        await expect(await ItemScreen.getByAccessibility("Buy groceries")).toBeExisting();
        await expect(await ItemScreen.getByAccessibility("Due April 30, 2022")).toBeExisting();
    });

    it('Edit a todo item', () => {
        
    });
});