/**
 * Created by jeansmits on 26/06/15.
 */
var app = angular.module('movieApp', ['movieApp.controllers']);
app.config(function() {
    console.log('app config');
});

app.run(function() {
   console.log('app run');
});