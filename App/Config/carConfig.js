/**
 * Created by Administrator on 2017/10/19.
 */
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('/service',{
            url:'/service',
            templateUrl:'App/Views/service.html',
            controller:'serviceController'
        })
        .state('/finance',{
            url:'/finance',
            templateUrl:'App/Views/finance.html',
            controller:'financeController'
        });
    $urlRouterProvider.otherwise('/service')
});