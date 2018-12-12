/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ExtJSApp.Application',

    name: 'ExtJSApp',

    requires: [
        // This will automatically load all classes in the ExtJSApp namespace
        // so that application classes do not need to require each other.
        'ExtJSApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'ExtJSApp.view.main.Main'
});
