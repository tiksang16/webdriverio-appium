class ListScreen {
    get createListBtn() {
        return $('//*[@name="Create list"]');
    }
    get listNameInput () {
        return $('//*[@value="List Name"]');
    }

    get createBtn () {
        return $('~Create');
    }

    listNameField(name) {
        return $(`~${name}`);
    }


}

module.exports = new ListScreen();