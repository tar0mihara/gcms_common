// ============================================================
// ＠＠
// テストページ
//
// %update / 2013.05.20
//
// ============================================================

/*var TEST = {"test2":"test","test2":"test"};
var TEST2 = function(){};

var test = function(){
	test.prototype.width;
	test.prototype.height;
	console.log(arguments)
};


console.log(typeof TEST2)*/

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