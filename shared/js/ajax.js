// ============================================================
// ＠＠
// カレンダーページ
//
// %update / 2013.05.20
//
// ============================================================

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