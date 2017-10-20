/**
 * Created by Administrator on 2017/10/19.
 */
app.directive('service',function(){
    return {
        restrict:'EA',
        templateUrl:'App/Views/template/_service.html',
        link:function(scope,ele,attr){
            var swiper1 = new Swiper('.pic',{
                autoplay: 2000,
                pagination:'.swiper-pagination',
                observer:true
            });
            var swiper2 = new Swiper('.commodity',{

            });
            $('.moreBtn').on('click',function(){
                var str = '';
                for(var i=0;i<2;i++){
                    str += "<dl><dt><img src='img/pics1.gif'></dt><dd><p>"+1111+"</p> <p>"+4545454+"</p> <p><span>"+1+"元</span><del>"+1.44+"万</del></p></dd> </dl>";
                }
                $('.lazyLoad').append(str);
            })
        }
    }
});
