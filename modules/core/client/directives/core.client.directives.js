'use strict';

angular
	.module('core')
	.directive('qbNavbar', function(){
		return {
			scope: {nav : "="},
			restrict: 'E',
			templateUrl: 'modules/core/client/views/navbar.client.tpl.html'
		};
	})
		.directive('qbNavbarDropdown',function(){
			return {
				restrict: 'E',
				scope: { title: '@', menu: '=' },
				replace:true,
				template: "<li class='dropdown'> " +
				"<a class='dropdown-toggle' data-toggle='dropdown' href='#'> {{title}} " +
	            "<span class='caret'></span></a> " +
	            "<ul class='dropdown-menu'> " +
	              "<qb-navbar-anchor ng-repeat='child in menu.children' state='{{child.state}}' title='{{child.title}}'></qa-navbar-anchor> " +
	            "</ul>" +
	          "</li>"
			}
		})
		.directive('qbNavbarAnchor', function(){
			return {
				restrict: 'E',
				scope: {
					state: '@',
					title: '@'
				},
				replace:true,
				template: "<li><a ui-sref='{{state}}'>{{title}}</a></li>"
			}
		})
	.directive('qbFormField', function(){
		return {
			restrict: 'E',
			scope: {
				field: '=',
				target: '='
			},
			link: function($scope){
				var f;
				for(var key in $scope.target){
					if (key === $scope.field.title.toLowerCase()){
						f = key;
					}
				}
				$scope.model = {};
			},	
			template: "<label class='control-label col-sm-2' for='{{field.title}}'>{{field.title}}:</label>" +
	    			"<div class='col-sm-4'> " +
	      				"<input type='{{field.type}}' class='form-control' id='{{field.title}}' placeholder='{{field.placeholder}}' " +
	      				" ng-model=model.name>" +
	    			"</div>"
		}
	});