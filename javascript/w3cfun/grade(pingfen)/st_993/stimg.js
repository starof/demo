$(document).ready(function(){

	$("#lv span").mouseover(function(){ up($(this).index()+1); });
	$("#lv").mouseout(function(){ up($(this).attr("lv")); });
	$("#lv span").click(function(){ $("#lv").attr("lv",$(this).index()+1); });
	
	function up(num){
		$("#lv span").removeClass("laugh").end().find("span:lt("+num+")").addClass("laugh");
	}
	
});