/**
 * Created by hejing on 2017/2/27.
 */
$(function () {
   var bookarray = [10792216,6038371,26745943,10546125,4736167,10549733,2308234];
   var len = bookarray.length;
   var html = "";
   var star_num = ""
   for(var i=0; i<len; i++){
     $.ajax({
         type: "GET",
         url: "https://api.douban.com/v2/book/"+ bookarray[i] +"?callback=?",
         dataType: "json",
         success: function (data) {
             if(data.rating.average > 8){
                     star_num = "star45";
             }else if (data.rating.average > 9){
                     star_num = "star50";
             };
             html += '<div class="book_row"><a href="'
                 + data.alt +'"><img alt="'
                 + data.title +'" src="'
                 + data.images.small + '"/></a><div class="book_detail"><span>书名：'
                 + data.title + '</span><span>豆瓣评分：' + data.rating.average + '</span><div>星级：<div class="star_all'
                 + star_num + '"></div></div><span>出版年：' + data.pubdate + '</span><span>出版社：'
                 + data.publisher + '</span></div></div>';
         }
     })
   };
   $(".container").html(html);
});