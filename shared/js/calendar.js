// ============================================================
// ＠＠
// カレンダーページ
//
// %update / 2013.05.20
//
// ============================================================

var CALENDAR;
CALENDAR = {};

function ajax(){
	$.ajax( {
	type : 'GET',
	async : true,
	url : "/shared/data/test.json",
	dataType : 'json',
	timeout : 6000,
	cache : false,
	success : function(data,status) {
		var test = data;
		$("#AjaxArea01").html(data[0].date);
	},
	error : function() {

	}//,

	} );  // ajax()
}


$(function(){
	$("#AjaxBtn").click(function(){
		ajax();
	});
});

$(function(){
	$("#CalType01 tr td").not(".holiday").mouseover(function(){
		$(this).css("background","#f0f8ff");
	}).mouseout(function(){
		$(this).css("background","#ffffff");
	});

	$("#CalType01 tr td").not(".holiday").bind("click",function(){
		CALENDAR.popShow();
	});

	$("#ModalArea #MdClose").bind("click",function(){
		CALENDAR.popHide();
	});
})

CALENDAR.popShow = function(){
	$("#ModalBg").removeClass("hide");
	$("#ModalBg").css("height", document.documentElement.scrollHeight+"px");
	$("#ModalArea").css("top", (document.documentElement.clientHeight-$("#ModalArea").height())/2+$("html, body").scrollTop());
	$("#ModalArea").css("left", (document.documentElement.clientWidth-$("#ModalArea").width())/2);
}

CALENDAR.popHide = function(){
	$("#ModalBg").addClass("hide");
}