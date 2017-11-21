console.log('loaded frontend_app');
angular.module('mean_demo', []).controller('crudController', do_crud);

function do_crud($scope, $http) {
    console.log('inside do_crud');

    $scope.read = function () {
        console.log('reading all records');
    }
    $scope.create = function () {
        console.log('creating user');
    }
    $scope.update = function (user) {
        console.log('updating user');
        console.log(user);
    }
    $scope.delete = function (user) {
        console.log('deleting user');
        console.log(user);
    }
}