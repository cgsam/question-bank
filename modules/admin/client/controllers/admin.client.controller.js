'use strict';

angular
	.module('admin')
    .controller('AdminCtrl', function($scope,AdminService){
     $scope.fields = [
        {
            title: 'Language',
            type: 'text',
            placeholder: 'Enter Language',
            value: 'question.language'
        },
        {
            title: 'Title',
            type: 'text',
            placeholder: 'Enter Title'
        }
    ];

    $scope.question = { 
            language: '',
            title: ''
    };

     $scope.save = function(question){
     	var promise = AdminService.addQuestion(question);
     	promise
     		.then(function(questions){
     			console.log('Success callback invoked');
     			console.log(JSON.stringify(questions));
     		},
     		function(error){
     			console.log('Error callback invoked');
     			console.log(JSON.stringify(error));
     		});
     	};
    });