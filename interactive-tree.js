'use strict';

var angMod = angular.module('treeTable', ['integralui']);
//http://www.lidorsystems.com/support/articles/angularjs/treeview/tree-view-checkbox-items.aspx
// http://www.lidorsystems.com/products/web/studio/samples/treeview/
//view-source:http://www.lidorsystems.com/support/articles/angularjs/treeview/tree-view-checkbox-items.aspx
HomeController.$inject = ['$timeout', 'IntegralUITreeViewService'];
function HomeController($timeout, $treeService) {
    var self = this;
    self.$onInit = function () {
        console.log('in init');
        self.treeItems = [
            {
                id: "12",
                text: "Item Text A ",
                children: [
                    {
                        id: "224",
                        text: "Item Text A1 ",
                        children: [
                            {
                                id: "2241",
                                text: "Item Text A11 ",
                            },
                            {
                                id: "2242",
                                text: "Item Text A12 ",
                            }
                        ]
                    },
                    {
                        id: "225",
                        text: "Item Text A2 ",
                        childern: []
                    }
                ]
            },
            {
                id: "99",
                text: "Item Text B ",
                children: [
                    { id: "35", text: "Item Text B1 " },
                    {
                        id: "36",
                        text: "Item Text B2 ",
                        childern: []
                    }
                ]
            }
        ];
        $timeout(function () {
            console.log('just testing timeout .... finished wait');
        }, 2000);

        self.treeName = "treeSample-RDAS";
        self.itemIcon = "icons-medium empty-doc";
        self.checkStates = ['checked', 'indeterminate', 'unchecked'];
        self.currentState = 'checked';
        self.checkList = [];
        self.checkBoxSettings = {
            autoCheck: true,
            threeState: true
        }

        var initTimer = $timeout(function () {
            $treeService.updateCheckValues(self.treeName);
            $timeout.cancel(initTimer);
        }, 1);

        self.itemCheckStateChanging = function (e) {
            if (e.value == 'unchecked')
                e.item.checkState = 'checked';
        }
    }
}

angMod.controller('treeTableController', HomeController);