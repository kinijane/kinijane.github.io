function bakanime()
{
		$("body").show().animate(
		{
			"background-size":"670"
		},{duration: 800});
}

$(function() 
{
	$("body").css("background-size","0");
	bakanime();
});

