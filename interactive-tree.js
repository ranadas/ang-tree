'use strict';

var angMod = angular.module('treeTable', []);
function HomeController() {
    var self = this;
    self.$onInit = function () {
        console.log('in init');
    }
}

angMod.controller('treeTableController', HomeController);