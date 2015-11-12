var myApp=angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/layout/partial_home.html'
        })

        .state('home.list', {
            url: '/list',
            templateUrl: 'app/layout/partial-home-list.html',
            controller: function($scope) {
                $scope.names = ['John', 'Ram', 'Mike'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'Hey this is a nested template.'
        })


        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'app/layout/partial-about.html' },

                // the child views will be defined here (absolutely named)
                'columnOne@about': { template: 'Look I am a column 1!' },

                // for column two, we'll define a separate controller
                'columnTwo@about': {
                    templateUrl: 'app/layout/table-data.html',
                    controller: 'aboutController'
                }
            }


        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'app/layout/contact.html'
        })
});

myApp.controller('aboutController', function($scope) {

    this.message = 'This is Test Data';

    this.cars = [
        {
            name: 'Mazda',
            price: 5000
        },
        {
            name: 'Benz C ',
            price: 10000
        },
        {
            name: 'BMW ',
            price: 15000
        }
    ];

});
