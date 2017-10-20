/**
 * Created by Administrator on 2017/10/19.
 */
app.controller('mainController',['$scope','ajaxServer',function($scope,ajaxServer){
    ajaxServer.getData('get','Data/service.json').then(function(data){
        $scope.result = data.data;
    })
}]);
