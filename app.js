'use strict';

var angMod = angular.module('treeDemoApp', []);

function HomeController () {
    var self = this;
    self.tableTitle = "Tree view Angularjs";

    self.itemsForTree = [];

}

angMod.controller('homeController',HomeController);