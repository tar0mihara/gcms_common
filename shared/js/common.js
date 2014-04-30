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

	$("img.over").mouseover(function(){
		var url = $(this).attr("src");
		url = url.replace(/_off\.(jpg|gif|png)$/, "_on.$1");
		$(this).attr("src",url);
	}).mouseout(function(){
		var url = $(this).attr("src");
		url = url.replace(/_on.(jpg|gif|png)/, "_off.$1");
		$(this).attr("src",url);
	});


	$("#GlobalNav ul li").mouseenter(function(){
		$(this).find(".subNavArea").removeClass("hide");

		var classLi = $(this).attr("class");
		if(classLi !== "gnPnav current"){
			$(this).addClass("hover");
		}
	}).mouseleave(function(){
		$(this).find(".subNavArea").addClass("hide");
		console.log("test");
		var classLi = $(this).attr("class");
		if(classLi !== "gnPnav current"){
			$(this).removeClass("hover");
		}
	});

	$("#GlobalNav ul li.subNav2").mouseenter(function(){
		$(this).find(".subNav2Area").removeClass('hide');
	}).mouseleave(function(){
		$(this).find(".subNav2Area").addClass('hide');
	});


	var test = $("body").attr("id");

	$("#ContentSubArea " + "#Sub" + test).addClass("current");

});

$(function(){
	//カラー選択
	$("#DebugBar ul li").click(function(){
		var id = $(this).attr("id");
		$("body").attr("class",id)
	});
})

//キーイベント
$(window).keydown(function(e){
	switch(e.keyCode){
	// F9キー
	case 120:
		$("#DebugBar").css("display","block")
		return false;
	break;

	default:
		break;
	}
});