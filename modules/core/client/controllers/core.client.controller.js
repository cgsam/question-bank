'use strict';

angular.module('core')
    .controller('baseController', function($scope){
        $scope.nav = {
            brand:{title: 'CodeGarage', href: '#'},
            menus:[
              {
                title: 'Admin',
                type : 'dropdown',
                href : '#',
                children:[{
                    state: 'admin.new',
                    title: 'New Question'
                },{
                    state: 'admin.list',
                    title: 'Questions list'
                }]
              },
              {
                title: 'User',
                href : '#',
                state: 'user'
              },
              {
                title: 'Guest',
                href : '#',
                state: 'user'
              }, {
                title: 'Guest2',
                href : '#',
                state: 'user'
              }
            ]
          };
    });
