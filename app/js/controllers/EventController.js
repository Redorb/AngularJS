'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.event = {
            name: 'Potato Summer Camp',
            date: '11/5/2016',
            time: '12:00 am'
        }
    }
);