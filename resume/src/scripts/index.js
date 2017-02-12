var $ = require('./common/libs/zepto-modules/zepto');
require('./common/libs/zepto-modules/event');
require('./common/libs/zepto-modules/touch');
require('./common/libs/zepto-modules/ajax');

var Swiper = require('./common/libs/swiper/swiper.min.js');
var swiperAni = require('./common/libs/swiper/swiper.animate1.0.2.min.js');
var IScroll = require('./common/libs/iscroll/iscroll.js');

// edit index
$(".swiper-container").show();

$("#mainContainer").hide();

var swiper = new Swiper('.swiper-container', {
    onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
        swiperAni.swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAni.swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper) {
        swiperAni.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
});
var myScroll;
var stra = '<i id="clicka" class="iconfont icon-back" style="position:absolute; left:10px; font-size:30px;"></i>';
function back(){ //命名函数
  $('#clicka').click(function() {
    $(".swiper-container").show();
    $("#mainContainer").hide();
  })
}
$(".enter").click(function() {
    $('#skill').addClass("colora");
    $(".swiper-container").hide();
    $("#mainContainer").show();
    $('#header').html(stra + $('#skill').html());
    back();
    $.post('http://1.895843172.applinzi.com/www/mock/skill.json', function(data) {
        var html = "";
        for (var i = 0; i < data.length; i++) {
            html += '<li><img src="../www/img/my' + i + '.jpg" id="floata"><div class="category_box"><span class="title">技术类别:</span><span class="category">' + data[i].category + '</span></div><div class="name_box"><span class="title">技术名称:</span> <span class="sname">' + data[i].name + '</span></div><div class="level_box"><span class="title">掌握程度:</span><span class="level">' + data[i].level + '</span></div><div class="time_box"><span class="title">年 &nbsp;  &nbsp;&nbsp;限:</span> <span class="time">' + data[i].time + '</span></div></li>';
        }
        $('#scroller ul').html(html);
        myScroll = new IScroll('#wrapper', { mouseWheel: true });
        document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
    })
});


$('#work').tap(function() {
    $('#work').addClass("colora");
    $('#mylife,#project,#skill').removeClass("colora");
    $('#header').html(stra+$(this).html());
    back();
    $('#scroller ul').html();
    $.post('http://1.895843172.applinzi.com/www/mock/work.json', function(data) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += '<li><img src="../www/img/a' + i + '.jpg" id="img12"><div class="category_box"><span class="title">学校名称:</span><span class="category">' + data[i].category + '</span></div><div class="name_box"><span class="title">专业:</span> <span class="sname">' + data[i].name + '</span></div><div class="level_box"><span class="title">在校职位:</span><span class="level">' + data[i].projects + '</span></div><div class="time_box"><span class="title">时 &nbsp;  &nbsp;&nbsp;间:</span> <span class="time">' + data[i].time + '</span></div></li>';
        }
        $('#scroller ul').html(html);
        myScroll.refresh();
        myScroll.scrollTo(0, 0)
    })
});

$('#project').tap(function() {
    $('#project').addClass("colora");
    $('#mylife,#work,#skill').removeClass("colora");
    $('#header').html(stra+$(this).html());
    back();
    $('#scroller ul').html();
    $.post('http://1.895843172.applinzi.com/www/mock/project.json', function(data) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += '<li><img src="../www/img/b' + i + '.jpg" id="img11"><div class="category_box"><span class="title">项目类别:</span><span class="category">' + data[i].category + '</span></div><div class="name_box"><span class="title">企业名称:</span> <span class="sname">' + data[i].name + '</span></div><div class="level_box"><span class="title">项目内容:</span><span class="level">' + data[i].description + '</span></div><div class="time_box"><span class="title">项目细节:</span> <span class="time">' + data[i].detail + '</span></div><div class="time_box"><span class="title">技术要点:</span> <span class="time">' + data[i].tech + '</span></div></li>';
        }
        $('#scroller ul').html(html);
        myScroll.refresh();
        myScroll.scrollTo(0, 0)
    })
});
$('#skill').tap(function() {
    $('#skill').addClass("colora");
    $('#mylife,#work,#project').removeClass("colora");
    $('#header').html(stra+$(this).html());
    back();
    $('#scroller ul').html();
    $.post('http://1.895843172.applinzi.com/www/mock/skill.json', function(data) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += '<li><img src="../www/img/my' + i + '.jpg" id="floata"><div class="category_box"><span class="title">技术类别:</span><span class="category">' + data[i].category + '</span></div><div class="name_box"><span class="title">技术名称:</span> <span class="sname">' + data[i].name + '</span></div><div class="level_box"><span class="title">掌握程度:</span><span class="level">' + data[i].level + '</span></div><div class="time_box"><span class="title">年 &nbsp;  &nbsp;&nbsp;限:</span> <span class="time">' + data[i].time + '</span></div></li>';
        }
        $('#scroller ul').html(html);
        myScroll.refresh();
        myScroll.scrollTo(0, 0)
    })
});

$('#mylife').tap(function() {
    $('#mylife').addClass("colora");
    $('#skill,#work,#project').removeClass("colora");
    $('#header').html(stra+$(this).html());
    back();
    var str = '<div class="swiper-slide page5 " style="background: url(img/rebg.jpg);background-size: 100% 100%; height:474px;"><div class="last" style="width: 100%;height: 100%;"><div class="" style="background: url(img/rebg4.png); background-size: cover;height: 100px;width: 139px;position: fixed;bottom: 50px;"></div><p style="color: white; margin-top:100px;">ColaMan*</p><img src="../www/img/reerweima.jpg" style="width: 150px;height: 150px;" /><p style="color: white;">tel:18755696101</p><p style="color: white;">QQ:895843172</p></div></div>'
    $('#scroller ul').html(str);
    myScroll.refresh();
    myScroll.scrollTo(0, 0)
});
