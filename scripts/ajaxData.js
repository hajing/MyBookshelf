/**
 * Created by hejing on 2017/2/27.
 */
$(function () {
    $.ajax({
        type : "GET",
        url : "https://api.douban.com/v2/book/10792216?callback=?",
        dataType : "json",
        success : function (data) {
            alert(data.pubdate);
        }
        })
});