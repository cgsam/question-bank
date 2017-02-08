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
		});