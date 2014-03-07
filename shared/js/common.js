// ============================================================
// ＠＠
// 共通処理
//
// %update / 2013.05.20
//
// ============================================================

$(function(){

	/*=============================================
 	マウスオーバー処理
 	=============================================*/

	$("img.over").each(function(){
		var img = new Image();
		var url = $(this).attr("src");
		url = url.replace(/_off\.(jpg|gif|png)$/, "_on.$1");
		img.src = url;
	});

	$("#GlobalNav ul li").mouseenter(function(){
		$(this).find(".subNavArea").removeClass("hide");

		var classLi = $(this).attr("class");
		if(classLi !== "gnPnav current"){
			$(this).addClass("hover");
			var url = $(this).find("img").attr("src");
			url = url.replace(/_off\.(jpg|gif|png)$/, "_on.$1");
			$(this).find("img").attr("src",url);
		}
	}).mouseleave(function(){
		$(this).find(".subNavArea").addClass("hide");
		console.log("test");
		var classLi = $(this).attr("class");
		if(classLi !== "gnPnav current"){
			$(this).removeClass("hover");
			var url = $(this).find("img").attr("src");
			url = url.replace(/_on.(jpg|gif|png)/, "_off.$1");
			$(this).find("img").attr("src",url);
		}
	});


});