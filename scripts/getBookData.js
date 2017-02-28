/**
 * Created by hejing on 2017/2/27.
 */
$(function () {
   var bookarray = [10792216,6038371,26745943,10546125,4736167,10549733,2308234];
   var len = bookarray.length;
   var star_num = "";
    for(var i=0; i<len; i++){
        $.ajax({
            type: "GET",
            url: "https://api.douban.com/v2/book/"+ bookarray[i] +"?callback=?",
            dataType: "json",
            success: function (data) {
                if(data.rating.average > 8&&data.rating.average <= 9){
                    star_num = "star45";
                }else if (data.rating.average > 9){
                    star_num = "star50";
                };
                var html = '<div class="book_row"><a target="_blank" href="'
                    + data.alt +'"><img alt="'
                    + data.title +'" src="'
                    + data.images.large + '"/></a><div class="book_detail"><span>书名：'
                    + data.title + '</span><span>豆瓣评分：' + data.rating.average + '</span><div>推荐星级：<div class="star_all '
                    + star_num + '"></div></div><span>出版时间：' + data.pubdate + '</span><span>出版社：'
                    + data.publisher + '</span></div></div>';
                console.log(html);
                $(".container").append(html);
            }
        })
    };
});