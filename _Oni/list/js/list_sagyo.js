//テーブル読み込み

var Table = {};

//json読み込み
Table.url ="/_Oni/list/data/page.json";

$(function(){
	$.ajax( {
	type : 'GET',
	async : true,
	url : Table.url,
	dataType : 'json',
	timeout : 6000,
	success : function(data, status) {
		var strHtml = [];
		for(var n=0;n < data.length;n++){
			var test = data[n].hasOwnProperty("test");
			if(test){
				(function(){
					strHtml[n] = "<li>"+data[n].test+"</li>"
				})();
			}
		}
		Table.data01 = data;
		Table.cell01 = Table.data01.length;
		Table.list();
	},
	error : function() {

	}//,

	} );  // ajax()
});

Table.list = function(){
		$("#ListArea").html($("#template").render(Table.data01));
		$("#ListArea").html(Table.box);
		$(".tbl01 tr:not(:eq(0))").not(".invalidity").mouseover(function(){
			$(this).css("background","#f0f8ff");
		}).mouseout(function(){
			$(this).css("background","#ffffff");
		});
	}


$(function(){
	Table.ListUrl = $(this).val();

	$("#ListCheck li").click(function(){
		$("#ListCheck li").removeClass("current");
		$(this).addClass("current");

		var test01 = $(this).find("input").val();
		for(var n=0;n<Table.cell01;n++){
			var l = Table.data01[n].url.replace(/http:\/\/([a-z]|\.|[0-9]|_|-)*\//g,"");
			Table.data01[n].url = test01 + l;
			Table.list();
		}
	});

});
