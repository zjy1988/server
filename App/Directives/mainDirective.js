/**
 * Created by Administrator on 2017/10/19.
 */
app.directive('main',function(){
    return {
        restrict:'EA',
        templateUrl:'App/Views/main.html',
        link:function(scope,ele,attr){
            $('menu').on('click','span',function(){
                var index = $(this).index();
                $(this).addClass('on').siblings().removeClass('on');
                $('.line').css('transform','translate3d('+index*100+'%,0,0)');
            });
            $('footer').on('click','a',function(){
                $(this).addClass('onblue').siblings().removeClass('onblue');
            })
        }
    }
});
