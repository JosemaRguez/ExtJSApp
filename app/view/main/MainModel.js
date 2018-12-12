/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ExtJSApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'ExtJSApp',

        userMsg: 'Welcome, user.',
        groupMsg: 'Welcome, group.',
        settingMsg: 'This is the setting section.'
    }

    //TODO - add data, formulas and/or methods to support your view
});
