$(function(){
	$(".subMenu").hide();

	$("#Accordion .archive").click(function(){
		$("div.subMenu").slideUp();
		if($("+div.subMenu",this).css("display") == "none"){
			$("+div.subMenu",this).slideDown();
		}
	});
});