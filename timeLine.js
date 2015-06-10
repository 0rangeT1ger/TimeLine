/**
 * Created by wujia_000 on 2015/6/10.
 */
var position = 0;
function pageRoll(event){
    //console.log(event);
    var wrapper = $(".wrapper");
    if(event.keyCode===40){
        position+=position===3?0:1;
        //console.log(position);
        wrapper.animate({
            top: "-"+position*70+"vh"
        },300);
    }
    if(event.keyCode===38){
        position-=position===0?0:1;
        wrapper.animate({
            top: "-"+position*70+"vh"
        },300);
    }
}
$(document).on("keydown",pageRoll);
$(document).on("click",pageRoll);
function displayDetail(event){
    console.log("great");
    if(event.target.className.indexOf("Icon")!==-1&&event.target.className.indexOf("Container")===-1){
        //此处应当判断目标的id，根据id来赋予盒子内的内容
        var tempNode = $(document.createElement("div")).addClass("appDetail").html("日均下载：？？<br>日均流水：？？<br>下载ARPU：？？");
        console.log(tempNode);
        $(event.target).append(tempNode);
    }
}
function removeDetail(event){
    if(event.target.className.indexOf("Icon")!==-1&&event.target.className.indexOf("Container")===-1){
        $(event.target).empty();
    }
}
$(".wrapper").on("mouseover",displayDetail);
$(".wrapper").on("mouseout",removeDetail);