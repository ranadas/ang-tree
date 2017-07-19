'use strict';

var angMod = angular.module('treeDemoApp', []);

function HomeController() {
    var self = this;
    self.tableTitle = "Tree view Angularjs";

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

}

angMod.controller('homeController', HomeController);


angMod
    .directive('ngTree', function () {
        return {
            restrict: 'E',
            transclude: true,
            controller: function ($scope) {
                $scope.showStates = function (item) {
                    item.active = !item.active;
                };
                $scope.items = [
                    {
                        country: "INDIA",
                        states: [
                            { state: "Assam" },
                            { state: "Chhattisgarh" },
                            { state: "Sikkim" },
                            { state: "Maharashtra" },
                            { state: "Madhya Pradesh" }
                        ]
                    },
                    {
                        country: "UNITED STATES",
                        states: [
                            { state: "Alabama" },
                            { state: "California" },
                            { state: "Hawaii" },
                            { state: "Michigan" },
                            {
                                state: "New York",
                                district: [
                                    { name: "manhattan" },
                                    { name: "queens" }
                                ]
                            },
                            { state: "Washington" }
                        ]
                    }
                ];
            },
            template: `<ul>
                        <li ng-repeat="item in items" ng-click="showStates(item)">
                            <input type="checkbox" name="itemSelection" ng-model="item._Selected" /> 
                            <span>{{item.country}}</span>                            
                            <ul>
                                <li ng-repeat="subItem in item.states" ng-show="item.active">
                                    <input type="checkbox" name="itemSelection" ng-model="subItem._Selected" /> 
                                    <span>{{subItem.state}}</span>
                                    <ul>
                                        <li ng-repeat="district in subItem.district">
                                            <span>{{district.name}}</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`
            //templateUrl: "'treeview.html'"
        };
    });