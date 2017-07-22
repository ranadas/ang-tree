'use strict';

//https://stackoverflow.com/questions/35198970/how-to-check-all-children-based-on-parent-while-also-checking-parent-based-on-ch
//https://plnkr.co/edit/sQfA2UL5dRC601R1QQul?p=preview

//https://plnkr.co/edit/Tt96EE2rruy1HAudRVJR?p=preview

var angMod = angular.module('treeParent', []);

HomeController.$inject = ['$timeout', '$scope'];
function HomeController($timeout, $scope) {
    var self = this;
    self.tableTitle = "Tree view with Angularjs";

    $scope.total_selected = 0;

    $scope.$watch('destinations', function(destinations){
        var total_selected = 0;

        angular.forEach(destinations, function(continent){
            continent.countries_selected = 0;

            angular.forEach(continent.countries, function(country){

                total_selected += country.selected ? 1 : 0

                continent.countries_selected += country.selected ? 1 : 0

                if (continent.countries_selected == continent.countries.length) {
                    continent.selected = true;
                } else {
                    continent.selected = false;
                }

            });

        });

        $scope.select_all = function(continent){
            continent.selected = true;
        };

        $scope.total_selected = total_selected;

    }, true);

    $scope.parentChange = function(index) {
        angular.forEach( $scope.destinations[index].countries, function(country) {
            country.selected = $scope.destinations[index].selected;
        });
    };

    $scope.destinations = [
        {
            "name": "Africa",
            "countries": [
                {"name": "Angola", "cities":[{"name":"Luanda"}]},
                {"name": "Botswana", "cities":[{"name":"xxx"}]},
                {"name": "Congo", "cities":[{"name":"yyy"}]}
            ]
        },
        {
            "name": "Asia",
            "countries": [
                {"name": "Bangladesh", "cities":[{"name":"Dhaka"},{"name":"Citagong"}]},
                {"name": "Cambodia", "cities":[{"name":"PhenomPheh"}]},
                {"name": "China", "cities":[{"name":"Shanghai"}]},
                {"name": "Japan", "cities":[{"name":"Tokyo"},{"name":"Saporo"}]}
            ]
        }
    ];
}

angMod.controller('homeController', HomeController);