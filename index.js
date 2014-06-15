var app = angular
	.module('app',['ngCookies'])
;

app
	.factory('appFactory',['$cookies',function($cookies){
		return function () {
			this.listItems = [];
			if ($cookies.listItems && $cookies.listItems.length > 2) {
				var listItems = $cookies.listItems;
				listItems = JSON.parse(listItems);
				this.listItems = listItems;
			} else {
				this.listItems.push({
					_goto: "jupiter",
					_and: "find some aliens",
					_at: "10:10 am"
				});
			}
			this.click = function () {
				if (!this._goto) {
					return;
				}
				if (!this._and) {
					return;
				}
				if (!this._at) {
					return;
				}
				this.listItems.push({
					_goto: this._goto,
					_and: this._and,
					_at: this._at
				});
				this.setCookies();
			}
			this.success = function (i) {
				this.listItems[i].success = true;
				this.setCookies();
			}
			this.danger = function (i) {
				this.listItems.splice(i,1);
				this.setCookies();
			}
			this.setCookies = function () {
				$cookies.listItems = JSON.stringify(this.listItems);
			}
		}
	}])
;

app
	.controller('appController',[
		'$scope',
		'appFactory',
		function ($scope,appFactory) {
			$scope.app = new appFactory();
		}
	])
;